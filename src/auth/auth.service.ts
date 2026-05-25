import { HttpStatus, HttpException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserType } from '../../generated/prisma';
import { AwsService } from '../aws/aws.service';

export interface JwtPayload {
  userId:string
  username: string;
  role: UserType;
  admin?: boolean;
  customer?: boolean;
  vendor?: boolean;
  iat?: number;
  exp?: number;
}

const asUserType = (role: string): UserType => {
  if (role == null) {
    throw new HttpException('Role is required', HttpStatus.BAD_REQUEST);
  }

  const str = String(role).toLowerCase();
  const allowed = Object.values(UserType).map((v) => String(v).toLowerCase());
  const idx = allowed.indexOf(str);
  if (idx === -1) {
    throw new HttpException('Invalid role', HttpStatus.BAD_REQUEST);
  }

  const originalValues = Object.values(UserType) as string[];
  return originalValues[idx] as UserType;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly awsService: AwsService,
  ) {}

  async signIn(userName: string, password: string) {
    try {
      const user = await this.userService.findByName(userName);

      if (!user) {
        return {
          status: 'error',
          statusCode: 404,
          message: 'User not found',
        };
      }
      if (user.password !== password) {
        throw new HttpException(
          {
            error: 'Unauthorized',
            statusCode: 401,
            message: 'Invalid credentials',
          },
          HttpStatus.UNAUTHORIZED,
        );
      }

      const payload: JwtPayload = {
        userId: user.userid,
        username: user.name ?? '',
        role: user.role,
      };

      if (user.role === UserType.admin) {
        payload.admin = true;
      } else if (user.role === UserType.customer) {
        payload.customer = true;
      } else if (user.role === UserType.vendor) {
        payload.vendor = true;
      }
      //this.awsService.sendEmailFromSES(user.email, 'New Sign In Detected', `Hello ${user.name},\n\nWe noticed a new sign-in to your account. If this was you, you can safely ignore this email. If you did not sign in, please secure your account immediately.\n\nBest regards,\nYour Store Team`);

      return {
        id: user.userid,
        name: user.name,
        email: user.email,
        role: user.role,
        access_token: this.jwtService.sign(payload),
      };
    } catch (err) {
      console.error(err);
      throw new HttpException(
        {
          error: 'Unauthorized',
          statusCode: 401,
          message: 'Invalid credentials',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async signUp(
    userName: string,
    password: string,
    email: string,
    role: UserType,
  ): Promise<{
    newUser: {
      name: string | null;
      password: string;
      email: string;
      role: UserType;
    };
    access_token: string;
  }> {
    try {
      const existingUser = await this.userService.findByEmail(email);
      if (existingUser) {
        throw new HttpException(
          { error: 'User Already Exists', status: 'FAILED' },
          HttpStatus.CONFLICT,
        );
      }

      const normalized = asUserType(role);

      const newUser = await this.userService.create({
        name: userName,
        password,
        email,
        role: normalized,
      });

      return {
        newUser,
        access_token: this.jwtService.sign({
          username: newUser.name,
          role: newUser.role,
        } as JwtPayload),
      };
    } catch (err) {
      console.error(err);
      // if the error was an HttpException thrown above, rethrow it
      if (err instanceof HttpException) {
        throw err;
      }
      throw new HttpException(
        { error: 'Wrong', status: 'FAILED' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  verifyToken(token: string, options?: { secret?: string }): JwtPayload {
    return this.jwtService.verify<JwtPayload>(token, options);
  }
}
