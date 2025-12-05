import { HttpStatus, HttpException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { $Enums } from 'generated/prisma';

export interface JwtPayload {
  username: string;
  role: $Enums.UserType;
  admin?: boolean;
  customer?: boolean;
  vendor?: boolean;
  iat?: number;
  exp?: number;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(userName: string, password: string) {
    try {
      const user = await this.userService.findByName(userName);

      if (!user) {
        // you could also throw here instead of returning
        return {
          status: 'error',
          statusCode: 404,
          message: 'User not found',
        };
      }

      // NOTE: this is plain-text comparison. In a real app, use bcrypt.
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
        username: user.name || '',
        role: user.role,
      };

      if (user.role === $Enums.UserType.admin) {
        payload.admin = true;
      } else if (user.role === $Enums.UserType.customer) {
        payload.customer = true;
      } else if (user.role === $Enums.UserType.vendor) {
        payload.vendor = true;
      }

      return {
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
    role: $Enums.UserType,
  ): Promise<{
    newUser: {
      name: string | null;
      password: string;
      email: string;
      role: $Enums.UserType;
    };
    access_token: string;
  }> {
    try {
      const existingUser = await this.userService.findOne(userName);

      if (existingUser) {
        throw new HttpException(
          {
            error: 'User Already Exists',
            status: 'FAILED',
          },
          HttpStatus.CONFLICT,
        );
      }

      const newUser = await this.userService.create({
        name: userName,
        password,
        email,
        role,
      });

      return {
        newUser,
        access_token: this.jwtService.sign({
          username: newUser.name,
          role: newUser.role,
        }),
      };
    } catch (err) {
      console.error(err);
      throw new HttpException(
        {
          error: 'Wrong',
          status: 'FAILED',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  verifyToken(token: string, options?: { secret?: string }): JwtPayload {
    return this.jwtService.verify<JwtPayload>(token, options);
  }
}
