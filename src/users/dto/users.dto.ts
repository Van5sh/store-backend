import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { $Enums, Prisma } from '@prisma/client';

type UserCreateInput = Pick<
  Prisma.UserCreateInput,
  'email' | 'name' | 'role' | 'password'
>;
type UserUpdateInput = Pick<
  Prisma.UserUpdateInput,
  'email' | 'name' | 'role' | 'password'
>;
export class CreateUserDto implements UserCreateInput {
  role: $Enums.UserType;
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UpdateUserDto implements UserUpdateInput {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(['CUSTOMER', 'ADMIN', 'VENDOR'])
  Role: 'CUSTOMER' | 'ADMIN' | 'VENDOR';

  @IsString()
  password?: string | Prisma.StringFieldUpdateOperationsInput | undefined;
}
