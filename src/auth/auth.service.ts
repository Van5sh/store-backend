import { HttpStatus, HttpException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { $Enums } from 'generated/prisma';

@Injectable()
export class AuthService {
  constructor(
    private readonly userSevice: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async signIn(userName: string, password: string) {
    try {
      const user = await this.userSevice.findByName(userName);
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
          401,
        );
      }
      const payload = { username: user.name, role: user.role };
      if (user.role === $Enums.UserType.admin) {
        payload['admin'] = true;
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
        401,
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
      const existingUser = await this.userSevice.findOne(userName);
      if (existingUser) {
        throw new HttpException(
          {
            error: 'User Already Exists',
            status: 'FAILED',
          },
          HttpStatus.CONFLICT,
        );
      }
      const newUser = await this.userSevice.create({
        name: userName,
        password: password,
        email: email,
        role: role,
      });
      return {
        newUser,
        access_token: this.jwtService.sign({
          username: newUser.name,
          role: newUser.role,
        }),
      };
    } catch (err) {
      console.log(err);
      throw new HttpException(
        {
          error: 'Wrong',
          status: 'FAILED',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  verifyToken(token: string, p0: { secret: string | undefined; }) {
    return this.jwtService.verify(token);
  }
}
