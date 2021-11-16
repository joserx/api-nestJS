import { IsNumber, IsString } from 'class-validator';
import { Body } from '@nestjs/common';

export class UserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
