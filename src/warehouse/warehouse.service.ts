import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class WarehouseService {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
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
}
