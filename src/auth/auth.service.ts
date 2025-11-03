import { HttpStatus, HttpException, Injectable, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/global-filters/http-exception.filter';
import { UsersService } from 'src/users/users.service';

@Injectable()
@UseFilters(new HttpExceptionFilter())
export class AuthService {
  constructor(private readonly userSevice: UsersService) {}
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
  
  async signUp(userName: string, password: string, email: string,role: 'CUSTOMER' | 'ADMIN' | 'VENDOR') {
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
      })      
    } catch (_) {
      throw new HttpException(
        {
          error: 'Wrong',
          status: 'FAILED',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
