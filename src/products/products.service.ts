import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDtoCreate } from './dto/create-product.dto';
import { ProductCategory } from '../../generated/prisma';
import { AwsService } from '../aws/aws.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly awsService: AwsService
  ) {}

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

  async getProductsByType(type: ProductCategory) {
    const products = await this.prisma.product.findMany({
      where: { category: type },
    });
    if (!products.length) {
      throw new NotFoundException('No products found for this type');
    }
    return products;
  }

  async getProductsByStoreId(id: string) {
    return this.prisma.storeAndProduct.findMany({
      where: { storeId: id },
      include: {
        product: true,
      },
    });
  }

  async createProduct(createProductDto: ProductDtoCreate,file:Express.Multer.File) {
    const upload=await this.awsService.uploadFileToS3(file);
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
          storeId: createProductDto.storeId,
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
  async getProductDetailsByProductId(productId: string) {
    const productDetails= await this.prisma.product.findUnique({
      where: { productId },
      include: {
        storeProducts: {
          include: {
            store: true,
            vendor: true,
          },
        },
        inventory: true,
      },
    });
    if (!productDetails) {
      throw new NotFoundException('Product not found');
    }
    return productDetails;
  }
}
