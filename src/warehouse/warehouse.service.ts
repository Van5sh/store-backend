import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import {
  CreateWarehouseDto,
  UpdateWarehouseDto,
} from './dto/create-warehouse.dto';

@Injectable()
export class WarehouseService {
  constructor(private readonly prisma: PrismaService) {}
  async allWarehouses() {
    try {
      const warehouses = await this.prisma.wareHouse.findMany({
        include: { city: true, products: true },
      });
      if (!warehouses || warehouses.length === 0) {
        throw new Error('No wareHouses found');
      }
      return warehouses;
    } catch (error) {
      throw new Error(`Error fetching wareHouses: ${error}`);
    }
  }

  async findOneWarehouse(id: string) {
    try {
      const warehouse = await this.prisma.wareHouse.findUnique({
        where: { warehouse_id: id },
      });
      return warehouse;
    } catch (error) {
      throw new Error(`Error fetching wareHouse: ${error}`);
    }
  }

  async createWarehouse(data: CreateWarehouseDto) {
    try {
      const warehouse = await this.prisma.wareHouse.create({
        data: {
          warehouse_name: data.warehouse_name,
          city: data.city,
          warehouse_capacity: data.warehouse_capacity,
        },
        include: { city: true },
      });
      return warehouse;
    } catch (error) {
      throw new Error(`Error creating wareHouse: ${error}`);
    }
  }

  async updateWarehouse(data: UpdateWarehouseDto) {
    try {
      const warehouse = await this.prisma.wareHouse.update({
        where: { warehouse_id: data.warehouse_id },
        data: {
          warehouse_name: data.warehouse_name,
          warehouse_capacity: data.warehouse_capacity,
          city: data.city,
        },
      });
      return warehouse;
    } catch (error) {
      throw new Error(`Error updating wareHouse: ${error}`);
    }
  }

  async deleteWarehouse(id: string) {
    try {
      const warehouse = await this.prisma.wareHouse.findUnique({
        where: { warehouse_id: id },
      });
      if (!warehouse) {
        throw new Error('Warehouse not found');
      }
      const deletedWarehouse = await this.prisma.wareHouse.delete({
        where: { warehouse_id: id },
      });
      return deletedWarehouse;
    } catch (error) {
      throw new Error(`Error deleting wareHouse: ${error}`);
    }
  }
}
