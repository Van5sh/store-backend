import { Prisma } from 'generated/prisma';

type CreateProductType = Pick<
  Prisma.ProductCreateInput,
  'product_name' | 'product_price' | 'warehouse' | 'stores'
>;
type UpdateProductType = Pick<
  Prisma.ProductUpdateInput,
  'product_name' | 'product_price'
>;
export class CreateProductDto implements CreateProductType {
  product_name: string;
  product_price: number;
  warehouse: Prisma.WareHouseCreateNestedOneWithoutProductsInput;
  stores: Prisma.StoreandProductCreateNestedManyWithoutProductInput;
}

export class UpdateProductDto implements UpdateProductType {
  product_name: string;
  product_price: number;
}
