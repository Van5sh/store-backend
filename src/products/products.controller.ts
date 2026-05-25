import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseFilters,
  HttpException,
  HttpStatus,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Req,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { HttpExceptionFilter } from '../global-filters/http-exception.filter';
import { ProductDtoCreate } from './dto/create-product.dto';
import { AuthGuard, JwtPayload } from '../common/gaurds/auth.guard';
import { Roles } from '../common/decorators/role.decorators';
import { ProductCategory } from '../../generated/prisma';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

@Controller('products')
@UseFilters(new HttpExceptionFilter())
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async allProducts() {
    try {
      return await this.productsService.allProducts();
    } catch (error) {
      throw new HttpException(
        `Error fetching products: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


  @Get(':id')
  async findProductById(@Param('id') id: string) {
    try {
      return await this.productsService.findOneProduct(id);
    } catch (error) {
      throw new HttpException(
        `Error fetching product by ID: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('name/:name')
  async findProductByName(@Param('name') name: string) {
    try {
      return await this.productsService.findProductByName(name);
    } catch (error) {
      throw new HttpException(
        `Error fetching product by name: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('type/:type')
  async getProductsByType(@Param('type') type: string) {
    try {
      return await this.productsService.getProductsByType(
        type as ProductCategory,
      );
    } catch (error) {
      throw new HttpException(
        `Error fetching products by type: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Post()
  @Roles('vendor', 'admin')
  @UseInterceptors(FileInterceptor('image', { storage: memoryStorage() }))
  async createProduct(
    @Body() createProductDto: ProductDtoCreate,
    @UploadedFile() file :Express.Multer.File
  ) {
    try {
      return await this.productsService.createProduct(createProductDto,file);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      throw new HttpException(
        `Error creating product: ${errorMessage}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('details/:productId')
  async getProductDetailsByProductId(@Param('productId') productId: string) {
    try {
      return await this.productsService.getProductDetailsByProductId(productId);
    } catch (error) {
      throw new HttpException(
        `Error fetching product details: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('vendor/:vendorId')
  async getProductsByVendorId(@Param('vendorId') vendorId: string) {
    try {
      return await this.productsService.getProductsByVendorId(vendorId);
    } catch (error) {
      throw new HttpException(
        `Error fetching products by vendor ID: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('store/:id')
  async getOrdersByStoreId(@Param('id') id: string) {
    try {
      return await this.productsService.getProductsByStoreId(id);
    } catch (error) {
      throw new HttpException(
        `Error fetching products by store ID: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @Roles('vendor', 'admin')
  async deleteProduct(
    @Param('id') id: string,
    @Req() req: { user?: JwtPayload },
  ) {
    try {
      if (!req.user) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
      return await this.productsService.deleteProduct(id, req.user);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      throw new HttpException(
        `Error deleting product: ${errorMessage}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
