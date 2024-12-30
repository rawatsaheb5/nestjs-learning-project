import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Book {
  
  @Prop({index:true})
  title: string;

  @Prop({index:true})
  author: string;

  @Prop({index:true})
  genre: string;

  @Prop()
  published_year: number;

  @Prop({ unique: true, index: true })
  ISBN: string;

  @Prop()
  stock: number;
}

export const BookSchema = SchemaFactory.createForClass(Book)