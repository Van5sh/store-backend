import { Prisma } from 'generated/prisma';
import { IsString } from 'class-validator';
type StoreCreateType = Pick<
  Prisma.StoreCreateInput,
  'storeId' | 'store_name' | 'products'
>;

type StoreUpdateType = Pick<
  Prisma.StoreUpdateInput,
  'storeId' | 'store_name' | 'products'
>;

export class CreateStoreDto implements StoreCreateType {
  @IsString()
  storeId: string;

  @IsString()
  store_name: string;

  @IsString()
  city: string;
}

export class UpdateStoreDto implements StoreUpdateType {
  @IsString()
  storeId: string;

  @IsString()
  store_name: string;

  @IsString()
  city: string;
}
