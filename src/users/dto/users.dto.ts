import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Prisma } from 'generated/prisma';

type UserCreateInput = Pick<Prisma.UserCreateInput, 'email' | 'name'>;

export class CreateUserDto implements UserCreateInput {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsEnum(['CUSTOMER', 'ADMIN', 'VENDOR'])
  role: 'CUSTOMER' | 'ADMIN' | 'VENDOR';
}
