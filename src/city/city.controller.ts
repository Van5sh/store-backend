import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto, UpdateCityDto } from './dto/create-city.dto';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  async create(@Body() createCityDto: CreateCityDto) {
    try{
      const city = await this.cityService.createCity(
        createCityDto,
      )
      return city;
    }catch (error) {
      throw new HttpException(error.message, error.status)
  }

  @Get('cities')
  async findAll() {
    return await this.cityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cityService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return await this.cityService.update(+id, updateCityDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cityService.remove(+id);
  }
}
