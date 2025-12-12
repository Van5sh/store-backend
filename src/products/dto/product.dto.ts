import { Prisma } from '@prisma/client';

type CreateProductType = Pick<
  Prisma.ProductCreateInput,
  'productName' | 'productPrice'
>;
type UpdateProductType = Pick<
  Prisma.ProductUpdateInput,
  'productName' | 'productPrice'
>;

export class CreateProductDto implements CreateProductType {
  productName: string;
  productPrice: number;
}

export class UpdateProductDto implements UpdateProductType {
  productName: string;
  productPrice: number;
}
