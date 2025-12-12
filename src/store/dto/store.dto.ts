import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';
type StoreCreateType = Pick<
  Prisma.StoreCreateInput,
  'storeId' | 'storeName' | 'city'
>;

type StoreUpdateType = Pick<
  Prisma.StoreUpdateInput,
  'city' | 'storeName' | 'storeId'
>;

export class CreateStoreDto implements StoreCreateType {
  @IsString()
  storeName: string;

  city: Prisma.CityCreateNestedOneWithoutStoresInput;
  @IsString()
  storeId: string;

  @IsString()
  store_name: string;

  @IsString()
  cityId: string;
}

export class UpdateStoreDto implements StoreUpdateType {
  @IsString()
  storeId: string;

  @IsString()
  store_name: string;

  @IsString()
  cityName: string;
}
