import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { Book, BookSchema } from './book/schemas/book.schema';

@Module({
  imports: [
    ThrottlerModule.forRoot([{ ttl: 5000, limit: 2 }]),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    BookModule,
  ],
})
export class AppModule {}
