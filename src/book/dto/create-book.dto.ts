import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    description: 'The title of the Book',
    example: 'Harry Potter',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255) // Optional: Limit the title length
  title: string;

  @ApiProperty({
    description: 'The author of the Book',
    example: 'J.K. Rowling',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  author: string;

  @ApiProperty({
    description: 'The genre of the Book',
    example: 'Fantasy',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  genre: string;

  @ApiProperty({
    description: 'The year the Book was published',
    example: 1997,
  })
  @IsInt()
  @Min(1500) // Ensure the year is not earlier than 1500
  @Max(new Date().getFullYear()) // Ensure the year is not greater than the current year
  published_year: number;

  @ApiProperty({
    description: 'The ISBN of the Book (13 characters)',
    example: '9780747532699',
  })
  @IsString()
  @IsNotEmpty()
  @Length(13, 13) // Ensure ISBN is exactly 13 characters
  ISBN: string;

  @ApiProperty({
    description: 'The stock of the Book available in the library',
    example: 100,
  })
  @IsInt()
  @Min(0) // Stock must be 0 or greater
  stock: number;
}
