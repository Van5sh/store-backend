import { IsString, IsNotEmpty } from 'class-validator';
import { Prisma } from 'generated/prisma';

type CityCreateType = Pick<Prisma.CityCreateInput, 'city' | 'state'>;
type CityUpdateType = Pick<Prisma.CityUpdateInput, 'city' | 'state'>;

export class CreateCityDto implements CityCreateType {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;
}

export class UpdateCityDto implements CityUpdateType {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;
}
