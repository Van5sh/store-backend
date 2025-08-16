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
import { CreateCityDto, UpdateCityDto } from './dto/create-city.dto';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  async create(@Body() createCityDto: CreateCityDto) {
    try {
      const city = await this.cityService.createCity(createCityDto);
      return {
        message: 'City created successfully',
        city,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('cities')
  async findAll() {
    try {
      const cities = await this.cityService.allCities();
      if (!cities || cities.length === 0) {
        throw new HttpException('No cities found', 404);
      }
      return cities;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const city = await this.cityService.findCity(+id);
      if (!city) {
        throw new HttpException('City not found', 404);
      }
      return {
        status: 'success',
        message: 'City found',
        data: city,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    try {
      const checkCity = await this.cityService.findCity(+id);
      if (!checkCity) {
        throw new HttpException('City not found', 404);
      }
      const updatedCity = await this.cityService.updateCity(+id, updateCityDto);
      return {
        status: 'success',
        message: 'City updated successfully',
        data: updatedCity,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const checkCity = await this.cityService.findCity(+id);
      if (!checkCity) {
        throw new HttpException('City not there in the list', 404);
      }
      await this.cityService.removeCity(+id);
      return {
        status: 'success',
        message: 'City deleted successfully',
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
