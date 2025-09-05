import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/database.service';
import { CreateCityDto, UpdateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCityDto: CreateCityDto) {
    try {
      return await this.prisma.city.create({
        data: createCityDto,
      });
    } catch (error) {
      throw new Error(`Error creating city: ${error}`);
    }
  }

  async findCities() {
    try {
      return await this.prisma.city.findMany();
    } catch (error) {
      throw new Error(`Error fetching cities: ${error}`);
    }
  }

  async findCityById(id: string) {
    try {
      return await this.prisma.city.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(`Error fetching city: ${error}`);
    }
  }

  async findCityByName(city: string) {
    try {
      return await this.prisma.city.findUnique({
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
        where: { id },
      });
      if (!city) throw new Error('City not found');
      const updatedCity = await this.prisma.city.update({
        where: { id },
        data: updateCityDto,
      });
      return updatedCity;
    } catch (error) {
      throw new Error(`Error updating city: ${error}`);
    }
  }

  async removeCity(id: string) {
    try {
      const city = await this.prisma.city.findUnique({
        where: { id },
      });
      if (!city) throw new Error('City not found');
      return await this.prisma.city.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Error deleting city: ${error}`);
    }
  }
}
