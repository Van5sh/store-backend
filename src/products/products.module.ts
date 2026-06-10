import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { DatabaseModule } from '../database/database.module';
import { ProductsService } from './products.service';
import { AwsModule } from '../aws/aws.module';
import { ActivityModule } from '../activity/activity.module';

@Module({
  imports: [DatabaseModule, AwsModule, ActivityModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
