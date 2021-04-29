import {
  IsNumber,
  IsString,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';

class Position {
  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  lng: number;
}

export class CreateRouteDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @ValidateNested()
  @IsNotEmpty()
  start_position: Position;

  @ValidateNested()
  @IsNotEmpty()
  end_position: Position;
}
