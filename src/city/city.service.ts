import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { CreateCityDto, UpdateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCityDto: CreateCityDto) {
    const city = this.prisma.city.create({
      data: createCityDto,
    });
    return city;
  }

  async findAll() {
    const cities = this.prisma.city.findMany();
    return cities;
  }

  async findOne(id: number) {
    const cityId = id.toString();
    const city = this.prisma.city.findUnique({
      where: {
        id: cityId,
      },
    });
    return city;
  }

  async update(id: number, updateCityDto: UpdateCityDto) {
    const cityId = id.toString();
    const updateCity = this.prisma.city.update({
      where: {
        id: cityId,
      },
      data: updateCityDto,
    });
    return updateCity;
  }

  async remove(id: number) {
    const cityId = id.toString();
    const deleteCity = this.prisma.city.delete({
      where: {
        id: cityId,
      },
    });
    return deleteCity;
  }
}
