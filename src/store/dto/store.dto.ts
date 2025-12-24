import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  storeName: string;

  @IsUUID()
  @IsNotEmpty()
  vendorId: string;

  @IsString()
  @IsNotEmpty()
  cityName: string;
}
