import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { UpdateBookDto } from './dto/update-book.dto';
import { DeleteBookDto } from './dto/delete-book.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { paginationDto } from './dto/pagination.dto';

@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Book added successfully.',
    type: Book, // specify the type of the response object
  })
  @ApiBadRequestResponse({
    description: 'Failed to add book.',
  })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async addBook(@Body() book: CreateBookDto): Promise<Book> {
    console.log(book);
    return await this.bookService.addBook(book);
  }

  @Get()
  @ApiOkResponse({
    description: 'Books fetched successfully.',
    type: [Book], // Returning an array of books
  })
  @ApiBadRequestResponse({
    description: 'Failed to fetch books.',
  })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async getAllBooks(@Query() query: paginationDto): Promise<Book[]> {
    const page = query.page || 1;
    const itemsPerPage = query.itemsPerPage || 20;
    return await this.bookService.findBooks(page, itemsPerPage);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Book fetched successfully.',
    type: Book, // Returning a single book
  })
  @ApiBadRequestResponse({
    description: 'Failed to fetch book.',
  })
  async getBookById(@Param('id') id: string): Promise<Book> {
    return await this.bookService.findBookById(id);
  }

  @Put(':id')
  @ApiOkResponse({
    description: 'Book updated successfully.',
    type: Book, // specify the type of the response object
  })
  @ApiBadRequestResponse({
    description: 'Failed to update book.',
  })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async updateBookById(
    @Param('id') id: string,
    @Body() book: UpdateBookDto,
  ): Promise<Book> {
    return await this.bookService.updateBook(id, book);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Book deleted successfully.',
    type: Book, // specify the type of the response object
  })
  @ApiBadRequestResponse({
    description: 'Failed to delete book.',
  })
  async deleteBookById(@Param('id') id: string): Promise<Book> {
    return await this.bookService.deleteBook(id);
  }
}
