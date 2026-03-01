import { IsNumber, IsOptional, IsUUID, ValidateIf } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  productId: string;

  @ValidateIf((o) => o.quantiy === undefined)
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsNumber()
  quantiy?: number;

  @IsUUID()
  userId: string;
}
