import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }


    async addBook(book:CreateBookDto) : Promise<Book>{
        const res = await this.bookModel.create(book)
        return res;
    }
    async findBooks(page:number, itemsPerPage: number): Promise<Book[]> {
        const skip = (page - 1) * itemsPerPage;
        const res = await this.bookModel.find().skip(skip).limit(itemsPerPage)
        return res;
    }

    async findBookById(id:string):Promise<Book> {
        const res = await this.bookModel.findById(id)
        return res;
    }
    async updateBook(id:string, book:UpdateBookDto) :Promise<Book> {
        const res = await this.bookModel.findByIdAndUpdate(id, book, { new: true, runValidators: true })
        return res;
    }
    async deleteBook(id: string) :Promise<Book> {
        const res = await this.bookModel.findByIdAndDelete(id);
        return res;
    }
}
