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
    const existingStore = await this.getStoreByName(dto.storeName);
    if (existingStore) {
      throw new Error('Store with this name already exists');
    }
    const user = await this.prisma.user.findFirst({
      where: { userid: dto.vendor as string },
    });
    if (user?.role !== 'vendor') {
      throw new Error('Not a vendor');
    }
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
