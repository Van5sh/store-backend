import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { HttpExceptionFilter } from 'src/global-filters/http-exception.filter';
import { RolesGuard } from 'src/common/gaurds/role.guard';

@Controller('store')
@UseGuards(RolesGuard)
@UseFilters(new HttpExceptionFilter())
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async allStores() {
    try {
      return this.storeService.allStores();
    } catch (error) {
      throw new HttpException(
        `Error fetching stores: ${error}`,
        HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
      );
    }
  }
  @Get('/:id')
  async getStoreById(@Param('id') id: string) {
    return this.storeService.getStoreById(id);
  }
  @Get('/:name')
  async getStoreByName(@Param('name') name: string) {
    return this.storeService.getStoreByName(name);
  }
}
