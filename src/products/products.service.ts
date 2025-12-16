import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
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
    try {
      const res = await this.prisma.product.create({
        data: {
          productName: createProduct.productName,
          productPrice: createProduct.productPrice,
          vendor: {
            connect: { userid: createProduct.vendorId },
          },
          warehouse: {
            connect: { warehouseId: createProduct.warehouseId },
          },
          quantity: createProduct.quantity,
        },
      });
      return res;
    } catch (err) {
      throw new BadRequestException(`Error creating product: ${err}`);
    }
  }
}
