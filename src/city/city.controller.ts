import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  HttpException,
  HttpStatus,
  Body,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CreateCityDto, UpdateCityDto } from './dto/create-city.dto';
import { CityService } from './city.service';
import { HttpExceptionFilter } from 'src/global-filters/http-exception.filter';
import { RolesGuard } from 'src/common/gaurds/role.guard';
import { Roles } from 'src/common/decorators/role.decorators';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('city')
@UseGuards(RolesGuard)
@UseFilters(new HttpExceptionFilter())
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  @Public()
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
  @Public()
  async findCityById(@Param('id') id: string) {
    try {
      const city = await this.cityService.findCityById(id);
      return city;
    } catch (error) {
      throw new HttpException(
        `Error fetching cities: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('create')
  @Roles('admin', 'vendor')
  async createCity(@Body() data: CreateCityDto) {
    try {
      const city = await this.cityService.create(data);
      return city;
    } catch (err) {
      throw new HttpException(`${err}`, HttpStatus.SERVICE_UNAVAILABLE);
    }
  }

  @Patch(':id')
  @Roles('admin', 'vendor')
  async updateCity(@Param('id') id: string, @Body() data: UpdateCityDto) {
    try {
      const updatedCity = await this.cityService.updateCity(id, data);
      return updatedCity;
    } catch (err) {
      throw new HttpException(`${err}`, HttpStatus.SERVICE_UNAVAILABLE);
    }
  }
}
