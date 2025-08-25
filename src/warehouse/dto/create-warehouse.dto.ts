import { Prisma } from 'generated/prisma';
import { IsString, IsNotEmpty } from 'class-validator';

type Warehouse = Pick<
  Prisma.WareHouseCreateInput,
  'warehouse_name' | 'warehouse_location'
>;
export class CreateWarehouseDto implements Warehouse {
  @IsString()
  @IsNotEmpty()
  cityId: string;

  @IsNotEmpty()
  @IsString()
  warehouse_name: string;

  @IsString()
  @IsNotEmpty()
  warehouse_location: string;
}
