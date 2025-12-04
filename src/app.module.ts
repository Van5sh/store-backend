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
import { StoreModule } from './store/store.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/gaurds/auth.guard';

@Module({
  imports: [
    DatabaseModule,
    CityModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
    StoreModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    WarehouseController,
    ProductsController,
    AuthController,
  ],
  providers: [
    AppService,
    WarehouseService,
    ProductsService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
