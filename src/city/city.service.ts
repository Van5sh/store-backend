import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { CreateCityDto, UpdateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}

  async createCity(createCityDto: CreateCityDto) {
    try {
      const city = this.prisma.city.create({
        data: createCityDto,
      });

      if (city === null) {
        throw new Error('City creation failed');
      }
      return city;
    } catch (error) {
      throw new Error(`Error creating city: ${error}`);
    }
  }

  async allCities() {
    const cities = this.prisma.city.findMany();
    return cities;
  }

  async findCity(id: number) {
    const cityId = id.toString();
    const city = this.prisma.city.findUnique({
      where: {
        id: cityId,
      },
    });
    return city;
  }

  async updateCity(id: number, updateCityDto: UpdateCityDto) {
    const cityId = id.toString();
    const updateCity = this.prisma.city.update({
      where: {
        id: cityId,
      },
      data: updateCityDto,
    });
    return updateCity;
  }

  async removeCity(id: number) {
    const cityId = id.toString();
    const deleteCity = this.prisma.city.delete({
      where: {
        id: cityId,
      },
    });
    return deleteCity;
  }
}
