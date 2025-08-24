import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CityModule } from './city/city.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { WarehouseController } from './warehouse/warehouse.controller';
import { WarehouseService } from './warehouse/warehouse.service';

@Module({
  imports: [
    DatabaseModule,
    CityModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, WarehouseController],
  providers: [AppService, WarehouseService],
})
export class AppModule {}
