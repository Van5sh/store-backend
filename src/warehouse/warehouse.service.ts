import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateWarehouseDto,
  UpdateWarehouseDto,
} from './dto/create-warehouse.dto';

@Injectable()
export class WarehouseService {
  constructor(private readonly prisma: PrismaService) {}

  // GET ALL WAREHOUSES
  async allWarehouses() {
    return this.prisma.wareHouse.findMany({
      include: {
        city: true,
        warehouseInventory: {
          include: { product: true },
        },
      },
    });
  }

  // GET ONE
  async findOneWarehouse(id: string) {
    return this.prisma.wareHouse.findUnique({
      where: { warehouseId: id },
      include: {
        city: true,
        warehouseInventory: {
          include: { product: true },
        },
      },
    });
  }

  // GET WAREHOUSES BY USER
  async getWarehousesByUserID(userId: string) {
    return this.prisma.wareHouse.findMany({
      where: {
        warehouseDetails: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        city: true,
        warehouseInventory: {
          include: { product: true },
        },
      },
    });
  }

  // CREATE WAREHOUSE
  async createWarehouse(data: CreateWarehouseDto) {
    const warehouseExists = await this.prisma.wareHouse.findFirst({
      where: { warehouseName: data.warehouseName },
    });

    if (warehouseExists) {
      throw new Error('Warehouse with this name already exists');
    }

    const city = await this.prisma.city.findFirst({
      where: { cityName: data.cityName },
    });

    if (!city) {
      throw new Error('City not found');
    }

    return this.prisma.wareHouse.create({
      data: {
        warehouseName: data.warehouseName,
        warehouseCapacity: data.warehouseCapacity,
        remainingSpace: data.warehouseCapacity,

        city: {
          connect: { cityId: city.cityId },
        },

        warehouseDetails: {
          create: {
            cityId: city.cityId,
            userId: data.userID,
          },
        },
      },
      include: {
        city: true,
        warehouseDetails: true,
      },
    });
  }

  // UPDATE WAREHOUSE
  async updateWarehouse(data: UpdateWarehouseDto) {
    const warehouse = await this.prisma.wareHouse.findUnique({
      where: { warehouseId: data.warehouseID },
    });

    if (!warehouse) {
      throw new Error('Warehouse not found');
    }

    const updatedWarehouse = await this.prisma.wareHouse.update({
      where: { warehouseId: data.warehouseID },
      data: {
        warehouseName: data.warehouseName,
        warehouseCapacity: data.warehouseCapacity,
      },
      include: { city: true },
    });

    await this.updateRemainingSpace(data.warehouseID);

    return updatedWarehouse;
  }

  // DELETE WAREHOUSE
  async deleteWarehouse(id: string) {
    return this.prisma.wareHouse.delete({
      where: { warehouseId: id },
    });
  }

  // CALCULATE REMAINING SPACE USING AGGREGATE
  async updateRemainingSpace(warehouseId: string) {
    const warehouse = await this.prisma.wareHouse.findUnique({
      where: { warehouseId },
    });

    if (!warehouse) {
      throw new Error('Warehouse not found');
    }

    const totalProducts = await this.prisma.warehouseInventory.aggregate({
      where: {
        warehouseId: warehouseId,
      },
      _sum: {
        quantity: true,
      },
    });

    const usedSpace = totalProducts._sum.quantity || 0;

    const remainingSpace = warehouse.warehouseCapacity - usedSpace;

    return this.prisma.wareHouse.update({
      where: { warehouseId },
      data: {
        remainingSpace: remainingSpace,
      },
    });
  }
}