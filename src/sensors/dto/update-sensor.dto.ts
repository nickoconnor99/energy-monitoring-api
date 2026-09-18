import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSensorDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}