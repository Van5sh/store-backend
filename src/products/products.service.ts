import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/product.dto';
// import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  // prisma = new PrismaClient();
  async allProducts() {
    try {
      const products = await this.prisma.product.findMany();
      if (!products || products.length === 0) {
        throw new NotFoundException('No products found');
      }
      return products;
    } catch (error) {
      throw new BadRequestException(`Error fetching products: ${error}`);
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
        throw new NotFoundException('Product not found');
      }
      return product;
    } catch (error) {
      throw new BadRequestException(`Error fetching product: ${error}`);
    }
  }

  async findProductByName(name: string) {
    try {
      const product = await this.prisma.product.findFirst({
        where: { productName: name },
      });
      if (!product) {
        throw new NotFoundException('Product not found');
      }
      return product;
    } catch (error) {
      throw new BadRequestException(`Error fetching product: ${error}`);
    }
  }

  async getProductsByStoreId(id: string) {
    try {
      return this.prisma.storeAndProduct.findMany({
        where: { storeId: id },
      });
    } catch (err) {
      throw new BadRequestException(`Error: ${err}`);
    }
  }
  async createProduct(createProduct: CreateProductDto) {
    return this.prisma.$transaction(async (tx) => {
      const product = await tx.product.create({
        data: {
          productName: createProduct.productName,
          productPrice: createProduct.productPrice,
          vendorID: createProduct.vendorId,
        },
      });

      await tx.warehouseInventory.create({
        data: {
          productId: product.productId,
          warehouseId: createProduct.warehouseId,
          quantity: 0,
        },
      });

      // fetch product WITH inventory
      return tx.product.findUnique({
        where: { productId: product.productId },
        include: {
          inventory: {
            include: {
              warehouse: true,
            },
          },
        },
      });
    });
  }
}
