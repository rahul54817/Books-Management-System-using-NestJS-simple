import { Module } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "src/controllers/book.controller";

@Module({
    imports : [],
    controllers : [BookController],
    exports : [],
    providers: [BookService]
})
export class Book {}
