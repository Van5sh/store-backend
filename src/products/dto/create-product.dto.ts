// import { ProductCategory } from './../../../generated/prisma/index.d';
import { Prisma } from '../../../generated/prisma';
import { IsEnum, IsNumber, IsString } from 'class-validator';

type UpdateProductType = Pick<
  Prisma.ProductUpdateInput,
  'productName' | 'productPrice'
>;


enum ProductCategory {
  electronics = 'electronics',
  clothing = 'clothing',
  home_appliances = 'home_appliances',
  books = 'books',
  toys = 'toys',
  sports = 'sports',
}

export class ProductDtoCreate {
  @IsString()
  productName: string;

  @IsNumber()
  productPrice: number;
  
  @IsString()
  vendorId: string;

  @IsString()
  warehouseId: string;

  @IsNumber()
  quantity: number;

  @IsEnum(ProductCategory)
  productCategory: ProductCategory;
}
