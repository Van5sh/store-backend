import { Prisma } from '../../../generated/prisma';
import { IsNumber, IsString } from 'class-validator';

type UpdateProductType = Pick<
  Prisma.ProductUpdateInput,
  'productName' | 'productPrice'
>;

export class CreateProductDto {
  productName: string;
  productPrice: number;
  vendorId: string;
  productCategory: ProductCategory;
  status: string;
  warehouseId: string;
  quantity: number;
}

enum ProductCategory {
  electronics = 'electronics',
  clothing = 'clothing',
  home_appliances = 'home_appliances',
  books = 'books',
  toys = 'toys',
  sports = 'sports',
}
export class UpdateProductDto implements UpdateProductType {
  @IsString()
  productName: string;

  @IsNumber()
  productPrice: number;

  @IsString()
  category: ProductCategory;
}
