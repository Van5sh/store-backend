import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async allProducts() {
    try {
      const products = await this.prisma.product.findMany();
      if (!products || products.length === 0) {
        throw new Error('No products found');
      }
      return products;
    } catch (error) {
      throw new Error(`Error fetching products: ${error}`);
    }
  }
  async findOneProduct(id: string) {
    try {
      const product = await this.prisma.product.findUnique({
        where: {
          product_id: id,
        },
      });
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error(`Error fetching product: ${error}`);
    }
  }

  async findProductByName(name: string) {
    try {
      const product = await this.prisma.product.findFirst({
        where: { product_name: name },
      });
      return product;
    } catch (error) {
      throw new Error(`Error fetching product: ${error}`);
    }
  }
}
