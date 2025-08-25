import { Prisma } from 'generated/prisma';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

type Warehouse = Pick<
  Prisma.WareHouseCreateInput,
  'warehouse_name' | 'warehouse_location' | 'warehouse_capacity'
>;
export class CreateWarehouseDto implements Warehouse {
  @IsString()
  @IsNotEmpty()
  cityId: string;

  @IsNotEmpty()
  @IsString()
  warehouse_name: string;

  @IsNotEmpty()
  @IsNumber()
  warehouse_capacity: number;

  @IsString()
  @IsNotEmpty()
  warehouse_location: string;
}
