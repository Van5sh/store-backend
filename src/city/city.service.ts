import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCityDto: Prisma.CityCreateInput) {
    const city = this.prisma.city.create({
      data: createCityDto,
    });
    return city;
  }

  findAll() {
    const cities = this.prisma.city.findMany();
    return cities;
  }

  findOne(id: number) {
    const cityId = id.toString();
    const city = this.prisma.city.findUnique({
      where: {
        id: cityId,
      },
    });
    return city;
  }

  update(id: number, updateCityDto: Prisma.CityUpdateInput) {
    const cityId = id.toString();
    const updateCity = this.prisma.city.update({
      where: {
        id: cityId,
      },
      data: updateCityDto,
    });
    return updateCity;
  }
  remove(id: number) {
    const cityId = id.toString();
    const deleteCity = this.prisma.city.delete({
      where: {
        id: cityId,
      },
    });
    return deleteCity;
  }
}
