import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}
  @Get()
  async findCities() {
    try {
      const cities = await this.cityService.findCities();
      return {
        status: 'success',
        statusCode: HttpStatus.OK,
        message: 'Cities fetched successfully',
        data: cities,
      };
    } catch (error) {
      throw new HttpException(
        `Error fetching cities: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findCityById(@Param('id') id: string) {}
}
