import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDtoCreate } from './dto/create-product.dto';
import { ProductCategory } from '../../generated/prisma';
import { AwsService } from '../aws/aws.service';
import { JwtPayload } from '../common/gaurds/auth.guard';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly awsService: AwsService
  ) {}

  async allProducts() {
    const products = await this.prisma.product.findMany({
      include: {
        inventory: {
          include: {
            warehouse: true,
          },
        },
      },
    });
    if (!products.length) {
      throw new NotFoundException('No products found');
    }
    return products;
  }

  async getProductsByVendorId(vendorId: string) {
    const products = await this.prisma.product.findMany({
      where: {
        storeProducts: {
          some: {
            vendorId,
          },
        },
      },
      include: {
        inventory: {
          include: {
            warehouse: true,
          },
        },
      },
    });
    if (!products.length) {
      throw new NotFoundException('No products found for this vendor');
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
      include: {
        inventory: {
          include: {
            warehouse: true,
          },
        },
      },
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
        product: {
          include: {
            inventory: {
              include: {
                warehouse: true,
              },
            },
          },
        },
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
          photoKey:upload.key,
          productPhoto:upload.url,
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

  async deleteProduct(productId: string, requester: JwtPayload) {
    const role = requester.role?.toString().toLowerCase();
    const requesterId = requester.userId;

    const product = await this.prisma.product.findUnique({
      where: { productId },
      include: {
        storeProducts: true,
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    if (role !== 'admin') {
      if (!requesterId) throw new ForbiddenException('Not allowed');
      const owns = product.storeProducts?.some((sp) => sp.vendorId === requesterId);
      if (!owns) throw new ForbiddenException('Not allowed to delete this product');
    }

    if (product.photoKey) {
      await this.awsService.deleteFileFromS3(product.photoKey);
    }

    return this.prisma.product.delete({
      where: { productId },
    });
  }
}
