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
        product: true,
      },
    });
  }

  // async createProduct(createProduct: CreateProductDto) {
  //   return this.prisma.$transaction(async (tx) => {
  //     const product = await tx.product.create({
  //       data: {
  //         productName: createProduct.productName,
  //         productPrice: createProduct.productPrice,
  //         vendorID: createProduct.vendorId,
  //       },
  //     });

  //     await tx.warehouseInventory.create({
  //       data: {
  //         productId: product.productId,
  //         warehouseId: createProduct.warehouseId,
  //         quantity: 0,
  //       },
  //     });

  //     return tx.product.findUnique({
  //       where: { productId: product.productId },
  //       include: {
  //         inventory: {
  //           include: {
  //             warehouse: true,
  //           },
  //         },
  //       },
  //     });
  //   });
  async createProduct(createProduct: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: {
        productName: createProduct.productName,
        productPrice: createProduct.productPrice,
        vendorID: createProduct.vendorId,
      },
      include: {
        inventory: {
          include: {
            warehouse: true,
          },
        },
      },
    });
    return product;
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
