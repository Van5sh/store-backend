import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { HttpExceptionFilter } from '../global-filters/http-exception.filter';
import { RolesGuard } from '../common/gaurds/role.guard';
import { CreateStoreDto } from './dto/store.dto';
import { Roles } from '../common/decorators/role.decorators';

@Controller('store')
@UseFilters(new HttpExceptionFilter())
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async allStores() {
    try {
      const stores = await this.storeService.allStores();
      return stores;
    } catch (error) {
      throw new HttpException(
        `Error fetching stores: ${error}`,
        HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
      );
    }
  }
  @UseGuards(RolesGuard)
  @Get('/:id')
  @Roles('admin', 'vendor')
  async getStoreById(@Param('id') id: string) {
    return await this.storeService.getStoreById(id);
  }

  @UseGuards(RolesGuard)
  @Get('/:name')
  @Roles('admin', 'vendor')
  async getStoreByName(@Param('name') name: string) {
    return this.storeService.getStoreByName(name);
  }

  @UseGuards(RolesGuard)
  @Roles('admin', 'vendor')
  @Post('create')
  async createStore(@Body() createStoreDto: CreateStoreDto) {
    try {
      const store = await this.storeService.createStore(createStoreDto);
      return store;
    } catch (error) {
      console.error('Error creating store:', error);
    }
  }
}
