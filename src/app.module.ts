import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CityModule } from './city/city.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { WarehouseController } from './warehouse/warehouse.controller';
import { WarehouseService } from './warehouse/warehouse.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    DatabaseModule,
    CityModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
  ],
  controllers: [AppController, WarehouseController, ProductsController],
  providers: [AppService, WarehouseService, ProductsService],
})
export class AppModule {}
