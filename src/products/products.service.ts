import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/product.dto';
import { OrderStatus } from '../../generated/prisma';

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
        product: true,
      },
    });
  }

  async createProduct(createProductDto: CreateProductDto) {
    return this.prisma.$transaction(async (tx) => {
      const product = await tx.product.create({
        data: {
          productName: createProductDto.productName,
          productPrice: createProductDto.productPrice,
          category: createProductDto.productCategory,
        },
      });
      await tx.storeAndProduct.create({
        data: {
          vendorId: createProductDto.vendorId,
          productId: product.productId,
          storeId: 'default-store-id',
        },
      });
      await tx.warehouseInventory.create({
        data: {
          warehouseId: createProductDto.warehouseId,
          productId: product.productId,
          quantity: createProductDto.quantity,
        },
      });
      return product;
    });
  }

  async getOrdersByUserId(userId: string) {
    if (!userId) {
      return 'UserID is required';
    }
    const orders = await this.prisma.order.findMany({
      where: { customerId: userId },
      orderBy: { createdAt: 'desc' },
    });
    return orders;
  }

  async getHistoryOrdersByUserId(userId: string, status: OrderStatus) {
    if (!userId) {
      return 'UserID is required';
    }
    const orders = await this.prisma.order.findMany({
      where: { customerId: userId, status},
      orderBy: { createdAt: 'desc' },
    });
    return orders;
  }

  async createOrder(productId: string, quantity: number, userId: string) {
    return this.prisma.$transaction(async (tx) => {
      const product = await tx.product.findUnique({
        where: { productId },
      });
      if (!product) {
        throw new NotFoundException('Product not found');
      }
      const data = await tx.warehouseInventory.findFirst({
        where: { productId },
      });
      if (!data || data.quantity < quantity) {
        throw new NotFoundException('Insufficient inventory');
      }
      const storeData = await tx.storeAndProduct.findFirst({
        where: { productId },
      });
      if (!storeData) {
        throw new NotFoundException('Store not found for this product');
      }
      await tx.warehouseInventory.updateMany({
        where: { productId },
        data: {
          quantity: {
            decrement: quantity,
          },
        },
      });
      return tx.order.create({
        data: {
          productId,
          quantity,
          warehouseId: data.warehouseId,
          storeId: storeData.storeId,
          customerId: userId,
          vendorId: storeData.vendorId,
          totalPrice: product.productPrice * quantity,
        },
      });
    });
  }
}
