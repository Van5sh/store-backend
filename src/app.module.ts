import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CityModule } from './city/city.module';

@Module({
  imports: [DatabaseModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
