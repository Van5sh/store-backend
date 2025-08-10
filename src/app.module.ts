import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { ChatModule } from './chat/chat.module';
import { CityModule } from './city/city.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { SalesModule } from './sales/sales.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UsersModule,
    ProductModule,
    ChatModule,
    CityModule,
    WarehouseModule,
    SalesModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
