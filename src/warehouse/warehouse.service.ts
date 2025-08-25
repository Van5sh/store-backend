import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class WarehouseService {
  constructor(private readonly prisma: PrismaService) {}
  async allWarehouses() {
    try {
      const warehouses = await this.prisma.wareHouse.findMany();
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
}
