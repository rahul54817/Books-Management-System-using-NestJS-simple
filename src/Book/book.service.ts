import { Injectable } from "@nestjs/common"
import { Book } from "./data/book.dto"
import {v4 as uuidv4} from 'uuid'
import { cursorTo } from "readline"

@Injectable()
export class BookService {
    public books : Book[] = []


    addBook (book: Book) :string {
        book.id = uuidv4()    
        this.books.push(book)
        return "added book"
    }


    updateBook (book : Book) :string {
        let  index = this.books.findIndex((currentBook) => {
            return currentBook.id == book.id;
        })

        this.books[index] = book;
        return "delete book"
        }
    
    deleteBook(bookId : string) :string {

       this.books =  this.books.filter((book)=> book.id != bookId)

        return "update book"
    }

    getAllBooks () :Book [] {
        return this.books
    }


    findBookById () :string {return "Find  book with ID  : " }
    }