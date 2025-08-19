import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    if (!users || users.length === 0) {
      throw new Error('No users found');
    }
    return users;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  @Post()
  async create(@Body() createUser: CreateUserDto) {
    const user = await this.userService.create(createUser);
    return user;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUser: UpdateUserDto) {
    const findUser = await this.userService.findOne(id);
    if (!findUser) {
      throw new Error('User not found');
    }
    const updatedUser = await this.userService.update(id, updateUser);
    return updatedUser;
  }
}
