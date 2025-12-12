import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
          productId: id,
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
        where: { productName: name },
      });
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error(`Error fetching product: ${error}`);
    }
  }

  async getProductsByStoreId(id: string) {
    try {
      return this.prisma.storeAndProduct.findMany({
        where: { storeId: id },
      });
    } catch (err) {
      throw new Error(`Error:${err}`);
    }
  }
  async addProductToStore(storeId: string, productId: string) {
    try {
      const res = await this.prisma.storeAndProduct.create({
        data: {
          storeId: storeId,
          productId: productId,
        },
      });
      return res;
    } catch (err) {
      throw new Error(`Error:${err}`);
    }
  }
}
