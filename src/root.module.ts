import { Module } from '@nestjs/common';
import { BookController } from './controllers/book.controller';
import { BookService } from './Book/book.service';
import { Book } from './Book/book.module';


@Module({
  imports: [Book],
  controllers: [BookController],
  providers: [BookService],
  exports:[]
})
export class Root {
  constructor (){
    console.log("Root Module");
    
  }
}
