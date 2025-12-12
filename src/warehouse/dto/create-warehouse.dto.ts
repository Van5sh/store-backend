// src/warehouse/dto/create-warehouse.dto.ts
import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateWarehouseDto {
  @IsString()
  @IsNotEmpty()
  cityId!: string;

  @IsString()
  @IsNotEmpty()
  warehouseId!: string; // use camelCase in DTO

  @IsNumber()
  @IsNotEmpty()
  warehouseCapacity!: number;

  @IsString()
  @IsNotEmpty()
  warehouseName!: string;

  // optional list of product ids to connect to this warehouse
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  productIds?: string[];
}

export class UpdateWarehouseDto extends PartialType(CreateWarehouseDto) {
  city: any;
}
