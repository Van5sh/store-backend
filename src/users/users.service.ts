import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { CreateUserDto } from './dto/users.dto';
import { UserType } from 'generated/prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { userid: id },
    });
    return user;
  }

  async create(data: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        role: data.role as UserType,
      },
    });
    return user;
  }

  async update(id: string, data: CreateUserDto) {
    const user = await this.prisma.user.update({
      where: { userid: id },
      data: {
        email: data.email,
        name: data.name,
        role: data.role as UserType,
      },
    });
    return user;
  }
}
