import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { HttpExceptionFilter } from 'src/global-filters/http-exception.filter';
import { Roles } from 'src/common/decorators/role.decorators';

import { AuthGuard } from 'src/common/gaurds/auth.guard';

@Controller('warehouse')
@UseFilters(new HttpExceptionFilter())
@UseGuards(AuthGuard)
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}
  @Get()
  @Roles('vendor')
  async findAll() {
    try {
      const warehouses = await this.warehouseService.allWarehouses();
      if (!warehouses || warehouses.length === 0) {
        throw new HttpException('No warehouses found', HttpStatus.NOT_FOUND);
      }
      return {
        status: 'success',
        statusCode: HttpStatus.OK,
        message: 'Warehouses fetched successfully',
        data: warehouses,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        if (error.getStatus() === 404) {
          throw new HttpException('No warehouses found', HttpStatus.NOT_FOUND);
        } else if (error.getStatus() === 400) {
          throw new HttpException(
            `Bad request: ${error.message}`,
            HttpStatus.BAD_REQUEST,
          );
        } else if (error.getStatus() === 500) {
          throw new HttpException(
            `Error fetching warehouses: ${error.message}`,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      }
    }
  }

  @Post()
  @Roles('vendor')
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
  @Roles('vendor')
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
      if (!deletedWarehouse) {
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
