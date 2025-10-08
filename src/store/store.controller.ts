import { Controller, Get, Param } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async allStores() {
    return this.storeService.allStores();
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
