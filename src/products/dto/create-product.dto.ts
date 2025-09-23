import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  source_id: string;

  @IsString()
  @IsNotEmpty()
  title: string;  // ✅ இங்கே title இருக்கணும்

  @IsString()
  author: string;

  @IsString()
  price: string;

  @IsString()
  currency: string;

  @IsString()
  image_url: string;

  @IsString()
  source_url: string;
}
