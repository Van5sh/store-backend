import { Prisma } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

type UpdateProductType = Pick<
  Prisma.ProductUpdateInput,
  'productName' | 'productPrice'
>;

export class CreateProductDto {
  productName: string;
  productPrice: number;
  vendorId: string;
  warehouseId: string;
  quantity: number;
}

export class UpdateProductDto implements UpdateProductType {
  @IsString()
  productName: string;

  @IsNumber()
  productPrice: number;
}
