import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async allProducts() {
    const products = await this.prisma.product.findMany();
    if (!products.length) {
      throw new NotFoundException('No products found');
    }
    return products;
  }

  async findOneProduct(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { productId: id },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async findProductByName(name: string) {
    const product = await this.prisma.product.findFirst({
      where: { productName: name },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async getProductsByStoreId(id: string) {
    return this.prisma.storeAndProduct.findMany({
      where: { storeId: id },
      include: {
        product: true, // ✅ useful improvement
      },
    });
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
