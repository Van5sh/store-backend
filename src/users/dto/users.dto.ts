import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Prisma } from 'generated/prisma';

type UserCreateInput = Pick<Prisma.UserCreateInput, 'email' | 'name'>;
type UserUpdateInput = Pick<Prisma.UserUpdateInput, 'email' | 'name'>;
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

export class UpdateUserDto implements UserUpdateInput {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
