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
    try {
      const cities = this.prisma.city.findMany();
      return cities;
    } catch (error) {
      throw new Error(`Error fetching cities: ${error}`);
    }
  }

  async findCity(id: number) {
    try {
      const cityId = id.toString();
      const city = this.prisma.city.findUnique({
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      throw new Error(`Error finding city: ${error}`);
    }
  }

  async updateCity(id: number, updateCityDto: UpdateCityDto) {
    try {
      const cityId = id.toString();
      const updateCity = this.prisma.city.update({
        where: {
          id: cityId,
        },
        data: updateCityDto,
      });
      return updateCity;
    } catch (error) {
      throw new Error(`Error updating city: ${error}`);
    }
  }

  async removeCity(id: number) {
    try {
      const cityId = id.toString();
      const deleteCity = this.prisma.city.delete({
        where: {
          id: cityId,
        },
      });
      return deleteCity;
    } catch (error) {
      throw new Error(`Error removing city: ${error}`);
    }
  }
}
