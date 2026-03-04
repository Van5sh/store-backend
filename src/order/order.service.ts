import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderStatus } from '../../generated/prisma';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async getLatestOrdersPlaced(limit = 10) {
    const resolvedLimit = Number.isFinite(limit) ? limit : 10;
    const safeLimit = Math.max(1, Math.min(resolvedLimit, 100));
    const orders = await this.prisma.order.findMany({
      orderBy: { orderDate: 'desc' },
      take: safeLimit,
      select: {
        orderId: true,
        orderDate: true,
        status: true,
        updatedAt: true,
        product: {
          select: { productName: true },
        },
        store: {
          select: { storeName: true },
        },
      },
    });

    return orders.map((order) => ({
      orderId: order.orderId,
      orderDate: order.orderDate,
      orderStatus: order.status,
      deliveryDate:
        order.status === OrderStatus.delivered ? order.updatedAt : null,
      orderItemName: order.product.productName,
      orderName: order.store.storeName,
    }));
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
  async getActiveOrdersByUserId(userId: string) {
    if (!userId) {
      return 'UserID is required';
    }
    return this.prisma.order.findMany({
      where: { customerId:userId, status: { in: [OrderStatus.pending, OrderStatus.shipped] } },
      orderBy: { createdAt: 'desc' },
    })
  }
  async getHistoryOrdersByUserId(userId: string, status: OrderStatus) {
    if (!userId) {
      return 'UserID is required';
    }
    const orders = await this.prisma.order.findMany({
      where: { customerId: userId, status: status },
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
