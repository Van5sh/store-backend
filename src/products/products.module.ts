import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '../database/database.module';
import { ProductsService } from './products.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
