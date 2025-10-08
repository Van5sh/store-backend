import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  async allProducts() {
    try {
      return await this.products.allProducts();
    } catch (error) {
      throw new Error(`Error fetching products: ${error}`);
    }
  }

  async findProductById(id: string) {
    try {
      return await this.products.findOneProduct(id);
    } catch (error) {
      throw new Error(`Error fetching product by ID: ${error}`);
    }
  }

  async findProductByName(name: string) {
    try {
      return await this.products.findProductByName(name);
    } catch (error) {
      throw new Error(`Error fetching product by name: ${error}`);
    }
  }
}
