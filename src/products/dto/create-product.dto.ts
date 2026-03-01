import { ProductCategory } from '../../../generated/prisma';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class ProductDtoCreate {
  @IsString()
  productName: string;

  @IsNumber()
  productPrice: number;
  
  @IsString()
  vendorId: string;

  @IsString()
  storeId: string;

  @IsString()
  warehouseId: string;

  @IsNumber()
  quantity: number;

  @IsEnum(ProductCategory)
  productCategory: ProductCategory;
}
