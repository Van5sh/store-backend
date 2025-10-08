import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { CreateCityDto, UpdateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCityDto: CreateCityDto) {
    try {
      return this.prisma.city.create({
        data: createCityDto,
      });
    } catch (error) {
      throw new Error(`Error creating city: ${error}`);
    }
  }

  async findCities() {
    try {
      return this.prisma.city.findMany();
    } catch (error) {
      throw new Error(`Error fetching cities: ${error}`);
    }
  }

  async findCityById(id: string) {
    try {
      return this.prisma.city.findUnique({
        where: {
          city_id: id,
        },
      });
    } catch (error) {
      throw new Error(`Error fetching city: ${error}`);
    }
  }

  async findCityByName(city: string) {
    try {
      return this.prisma.city.findUnique({
        where: {
          city,
        },
      });
    } catch (error) {
      throw new Error(`Error fetching city: ${error}`);
    }
  }

  async updateCity(id: string, updateCityDto: UpdateCityDto) {
    try {
      const city = await this.prisma.city.findUnique({
        where: { city_id: id },
      });
      if (!city) throw new Error('City not found');
      return this.prisma.city.update({
        where: { city_id: id },
        data: updateCityDto,
      });
    } catch (error) {
      throw new Error(`Error updating city: ${error}`);
    }
  }

  async removeCity(id: string) {
    try {
      const city = await this.prisma.city.findUnique({
        where: { city_id: id },
      });
      if (!city) throw new Error('City not found');
      return this.prisma.city.delete({
        where: { city_id: id },
      });
    } catch (error) {
      throw new Error(`Error deleting city: ${error}`);
    }
  }
}
