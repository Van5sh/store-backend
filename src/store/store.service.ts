import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
// import { CreateStoreDto } from './dto/store.dto';

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) {}
  async allStores() {
    try {
      const stores = await this.prisma.store.findMany();
      if (!stores) {
        throw new Error('No stores Available as of now');
      }
      return stores;
    } catch (err) {
      throw new Error(`Error:${err}`);
    }
  }
  async getStoreById(id: string) {
    try {
      const store = await this.prisma.store.findUnique({
        where: {
          storeId: id,
        },
      });
      return store;
    } catch (err) {
      throw new Error(`Error:${err}`);
    }
  }
  async getStoreByName(name: string) {
    try {
      const store = await this.prisma.store.findFirst({
        where: {
          storeName: name,
        },
      });
      return store;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
  // async createStore(createStore: CreateStoreDto) {
  //   try {
  //     const res = await this.prisma.store.create({
  //       data: {
  //         storeName: createStore.store_name,
  //       },
  //     });
  //     return res;
  //   } catch (err) {
  //     throw new Error(`${err}`);
  //   }
  // }
}
