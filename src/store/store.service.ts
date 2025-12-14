import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStoreDto } from './dto/store.dto';

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) {}
  async allStores() {
    return this.prisma.store.findMany();
  }
  async getStoreById(id: string) {
    return this.prisma.store.findUnique({
      where: {
        storeId: id,
      },
    });
  }
  async getStoreByName(name: string) {
    return this.prisma.store.findFirst({
      where: {
        storeName: name,
      },
    });
  }
  async createStore(dto: CreateStoreDto) {
    return this.prisma.store.create({
      data: {
        storeName: dto.storeName,

        vendor: {
          connect: { userid: dto.vendor as string },
        },

        city: {
          connect: { cityName: dto.cityName },
        },
      },
    });
  }
}
