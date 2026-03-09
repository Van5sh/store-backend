import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '../database/database.module';
import { ProductsService } from './products.service';
import { AwsModule } from '../aws/aws.module';

@Module({
  imports: [DatabaseModule,AwsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
