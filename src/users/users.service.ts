import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    try {
      return this.prisma.user.findMany();
    } catch (error) {
      throw new Error(`Error fetching users: ${error}`);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { userid: id },
      });
      return user;
    } catch (error) {
      throw new Error(`Error fetching user: ${error}`);
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email },
      });
      return user;
    } catch (error) {
      throw new Error(`Error fetching user by email: ${error}`);
    }
  }

  async create(data: CreateUserDto) {
    try {
      if (!('password' in data) || !data.password) {
        throw new HttpException('Password is required', HttpStatus.BAD_REQUEST);
      }

      const user = await this.prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          role: data.role,
          password: data.password,
        },
      });
      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error}`);
    }
  }

  async update(id: string, data: UpdateUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: { userid: id },
        data: {
          email: data.email,
          name: data.name,
        },
      });
      return user;
    } catch (error) {
      throw new Error(`Error updating user: ${error}`);
    }
  }

  async findByName(name: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: { name },
      });
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return user;
    } catch (error) {
      throw new HttpException(
        `Error fetching user by name: ${error}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
