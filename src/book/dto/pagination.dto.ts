import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class paginationDto {
  @ApiProperty({
    description: 'Page number',
    example: '1',
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number;
  @ApiProperty({
    description: 'Items per page',
    example: '10',
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  itemsPerPage: number;
}
