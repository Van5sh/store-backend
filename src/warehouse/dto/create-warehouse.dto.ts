import { Prisma } from 'generated/prisma';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

type WarehouseCreateInput = Pick<
  Prisma.WareHouseCreateInput,
  'city' | 'warehouse_id' | 'warehouse_capacity' | 'warehouse_name' | 'products'
>;

type WarehouseUpdateInput = Pick<
  Prisma.WareHouseUpdateInput,
  'city' | 'warehouse_id' | 'warehouse_name' | 'products' | 'warehouse_capacity'
>;

export class CreateWarehouseDto implements WarehouseCreateInput {
  @IsString()
  @IsNotEmpty()
  city: Prisma.CityCreateNestedOneWithoutWareHouseInput;

  @IsString()
  @IsNotEmpty()
  warehouse_id: string;

  @IsNumber()
  @IsNotEmpty()
  warehouse_capacity: number;

  @IsString()
  @IsNotEmpty()
  warehouse_name: string;
}

export class UpdateWarehouseDto implements WarehouseUpdateInput {
  @IsString()
  @IsNotEmpty()
  warehouse_id: string;

  @IsString()
  @IsNotEmpty()
  warehouse_name: string;

  @IsNumber()
  @IsNotEmpty()
  warehouse_capacity: number;

  @IsString()
  @IsNotEmpty()
  city: Prisma.CityUpdateOneRequiredWithoutWareHouseNestedInput;
}
