import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

type CreateStore = Pick<
  Prisma.StoreCreateInput,
  'storeName' | 'city' | 'vendor'
>;

export class CreateStoreDto implements CreateStore {
  @IsString()
  @IsNotEmpty()
  storeName: string;

  @IsString()
  city: Prisma.CityCreateNestedOneWithoutStoresInput;

  @IsNotEmpty()
  vendor: Prisma.UserCreateNestedOneWithoutStoresInput;

  @IsString()
  cityName: string | undefined;
}
