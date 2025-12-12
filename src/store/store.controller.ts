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
import { HttpExceptionFilter } from 'src/global-filters/http-exception.filter';
import { RolesGuard } from 'src/common/gaurds/role.guard';
import { CreateStoreDto } from './dto/store.dto';
import { Roles } from 'src/common/decorators/role.decorators';

@Controller('store')
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
  @UseGuards(RolesGuard)
  @Get('/:id')
  @Roles('admin', 'vendor')
  async getStoreById(@Param('id') id: string) {
    return this.storeService.getStoreById(id);
  }

  @UseGuards(RolesGuard)
  @Get('/:name')
  @Roles('admin', 'vendor')
  async getStoreByName(@Param('name') name: string) {
    return this.storeService.getStoreByName(name);
  }
  @UseGuards(RolesGuard)
  @Roles('admin', 'vendor')
  @Post()
  async createStore(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.createStore(createStoreDto);
  }
}
