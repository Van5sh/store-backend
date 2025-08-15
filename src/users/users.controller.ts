import { Body, Controller, Get, Post, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly User: UsersService) {}

  @Get()
  async findAll() {
    return await this.User.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.User.findOne(id);
  }

  @Post()
  async create(@Body() createUser: CreateUserDto) {
    return await this.User.create(createUser);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUser: CreateUserDto) {
    return await this.User.update(id, updateUser);
  }
}
