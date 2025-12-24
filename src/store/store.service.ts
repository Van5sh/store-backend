import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
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
    const existingStore = await this.prisma.store.findFirst({
      where: {
        storeName: dto.storeName,
        vendorId: dto.vendorId,
        cityName: dto.cityName,
      },
    });

    if (existingStore) {
      throw new ConflictException(
        'Store with this name already exists for this vendor in this city',
      );
    }

    const user = await this.prisma.user.findUnique({
      where: { userid: dto.vendorId },
    });

    if (!user || user.role === 'customer') {
      throw new ForbiddenException('Not a vendor');
    }

    return this.prisma.store.create({
      data: {
        storeName: dto.storeName,
        vendor: { connect: { userid: dto.vendorId } },
        city: { connect: { cityName: dto.cityName } },
      },
    });
  }
}
