import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteBookDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}