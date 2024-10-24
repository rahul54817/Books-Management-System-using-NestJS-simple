import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from '../Book/book.service';
import { Book } from 'src/Book/data/book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  //add Book
  @Post('/add-book')
  addBook(@Body() book: Book): string {
    this.bookService.addBook(book);
    return 'book added succesfully';
  }
  //delet book
  @Delete('/delete-book/:id')
  deleteBook(@Param('id') bookId : string): string {
    this.bookService.deleteBook(bookId);
    return 'book deleted';
  }
  //update book
  @Put('/update-book')
  updateBook(@Body() book: Book): string {
    this.bookService.updateBook(book);
    return 'Book Updated Successfully';
  }

  // getAllBooks
  @Get('/get-all-books')
  getAllBooks(): Book[] {
    return this.bookService.getAllBooks();
  }
}
