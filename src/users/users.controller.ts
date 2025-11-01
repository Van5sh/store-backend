import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { HttpExceptionFilter } from 'src/global-filters/http-exception.filter';

@Controller('users')
@UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll() {
    try {
      const users = await this.userService.findAll();
      if (!users || users.length === 0) {
        throw new HttpException('No users found', HttpStatus.NOT_FOUND);
      }
      return users;
    } catch (error) {
      throw new HttpException(
        `Internal server error ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.userService.findOne(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw new HttpException(
        `Internal server error ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async create(@Body() createUser: CreateUserDto) {
    try {
      const user = await this.userService.create(createUser);
      const existingUser = await this.userService.findByName(createUser.name);
      if (existingUser) {
        throw new HttpException('User already exists', HttpStatus.CONFLICT);
      }
      return {
        status: 'success',
        statusCode: HttpStatus.CREATED,
        message: 'User created successfully',
        data: user,
      };
    } catch (error) {
      throw new HttpException(
        `Internal server error ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUser: UpdateUserDto) {
    try {
      const findUser = await this.userService.findOne(id);
      if (!findUser) {
        throw new Error('User not found');
      }
      const updatedUser = await this.userService.update(id, updateUser);
      return updatedUser;
    } catch (error) {
      throw new HttpException(
        `Internal server error ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
