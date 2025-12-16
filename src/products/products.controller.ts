import {
  Controller,
  Get,
  Param,
  Body,
  UseFilters,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { HttpExceptionFilter } from '../global-filters/http-exception.filter';

@Controller('products')
@UseFilters(new HttpExceptionFilter())
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // GET /products
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

  // GET /products/:id
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
}
