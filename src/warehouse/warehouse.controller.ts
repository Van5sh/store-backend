import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
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

  @Delete(':id')
  async deleteWarehouse(@Param('id') id: string) {
    try {
      const warehouse = await this.warehouseService.findOneWarehouse(id);
      if (!warehouse) {
        return {
          status: 'error',
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Warehouse not found',
        };
      }
      const deletedWarehouse = await this.warehouseService.deleteWarehouse(id);
      if (!deletedWarehouse){
        throw new Error('Warehouse deletion failed');
      }
      return {
        status: 'success',
        statusCode: HttpStatus.OK,
        message: 'Warehouse deleted successfully',
        data: deletedWarehouse,
      };
    } catch (error) {
      throw new HttpException(
        `Error deleting warehouse: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
