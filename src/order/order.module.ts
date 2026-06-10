import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { DatabaseModule } from '../database/database.module';
import { ActivityModule } from '../activity/activity.module';

@Module({
  imports: [DatabaseModule, ActivityModule],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
