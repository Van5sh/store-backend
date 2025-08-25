import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
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
    try {
      const warehouse = await this.warehouseService.createWarehouse(data);
      return {
        status: 'success',
        statusCode: HttpStatus.CREATED,
        message: 'Warehouse created successfully',
        data: warehouse,
      };
    } catch (error) {
      throw new Error(`Error creating warehouse: ${error}`);
    }
  }
}
