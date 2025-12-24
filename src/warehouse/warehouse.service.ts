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
    return this.prisma.wareHouse.findMany({
      include: {
        city: true,
        warehouseInventory: {
          include: { product: true },
        },
      },
    });
  }

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

  async createWarehouse(data: CreateWarehouseDto) {
    return this.prisma.wareHouse.create({
      data: {
        warehouseName: data.warehouseName,
        warehouseCapacity: data.warehouseCapacity,
        city: { connect: { cityId: data.cityId } },
        warehouseDetails: {
          create: {
            cityId: data.cityId,
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

  async updateWarehouse(data: UpdateWarehouseDto) {
    return this.prisma.wareHouse.update({
      where: { warehouseId: data.warehouseId },
      data: {
        warehouseName: data.warehouseName,
        warehouseCapacity: data.warehouseCapacity,
      },
      include: { city: true },
    });
  }

  async deleteWarehouse(id: string) {
    return this.prisma.wareHouse.delete({
      where: { warehouseId: id },
    });
  }
}
