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
  @IsNumber()
  @IsNotEmpty()
  warehouseCapacity!: number;

  @IsString()
  @IsNotEmpty()
  warehouseName!: string;

  @IsString()
  @IsNotEmpty()
  cityID: string;

  @IsString()
  @IsNotEmpty()
  userID: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  productIds?: string[];
}

export class UpdateWarehouseDto extends PartialType(CreateWarehouseDto) {
  warehouseID!: string;
}
