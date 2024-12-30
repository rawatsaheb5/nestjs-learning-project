import {
  IsString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Length,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiProperty({
    description: 'The title of the book.',
    type: String,
    maxLength: 255,
    example:"harry",
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  title?: string;

  @ApiProperty({
    description: 'The author of the book.',
    type: String,
    example:'J k Anthony',
    maxLength: 100,
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  author?: string;

  @ApiProperty({
    description: 'The ISBN of the book (must be 13 characters).',
    type: String,
    minLength: 13,
    maxLength: 13,
    example:'21343234223ij',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(13, 13) // ISBN must still meet the 13-character constraint
  ISBN?: string;

  @ApiProperty({
    description: 'The number of copies available in stock.',
    type: Number,
    example:23,
    minimum: 0,
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  stock?: number;

  @ApiProperty({
    description: 'The genre of the book.',
    type: String,
    maxLength: 50,
    example:'DRAMA',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  genre?: string;

  @ApiProperty({
    description: 'The year the book was published.',
    type: Number,
    minimum: 1500,
    maximum: new Date().getFullYear(),
    example:2004,
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(1500)
  @Max(new Date().getFullYear())
  published_year?: number;
}
