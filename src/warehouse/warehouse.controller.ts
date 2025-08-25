import { Body, Controller, Get, Post } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}
  @Get()
  async findAll() {
    return await this.warehouseService.allWarehouses();
  }
  @Post()
  async createWarehouse(@Body() data: CreateWarehouseDto) {
    return await this.warehouseService.createWarehouse(data);
  }
}
