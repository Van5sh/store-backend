import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
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
        where: { warehouseId: id },
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
          warehouseName: data.warehouseName,
          warehouseCapacity: data.warehouseCapacity,
          warehouseId: data.warehouseId,
          city: { connect: { cityId: data.cityId } },
          products: data.productIds
            ? { connect: data.productIds.map((id) => ({ productId: id })) }
            : undefined,
        },
      });
      return warehouse;
    } catch (error) {
      throw new Error(`Error creating wareHouse: ${error}`);
    }
  }

  async updateWarehouse(data: UpdateWarehouseDto) {
    try {
      const warehouse = await this.prisma.wareHouse.update({
        where: { warehouseId: data.warehouseId },
        data: {
          warehouseName: data.warehouseName,
          warehouseCapacity: data.warehouseCapacity,
        },
        include: { city: true },
      });
      return warehouse;
    } catch (error) {
      throw new Error(`Error updating wareHouse: ${error}`);
    }
  }

  async deleteWarehouse(id: string) {
    try {
      const warehouse = await this.prisma.wareHouse.findUnique({
        where: { warehouseId: id },
      });
      if (!warehouse) {
        throw new Error('Warehouse not found');
      }
      const deletedWarehouse = await this.prisma.wareHouse.delete({
        where: { warehouseId: id },
      });
      return deletedWarehouse;
    } catch (error) {
      throw new Error(`Error deleting wareHouse: ${error}`);
    }
  }
}
