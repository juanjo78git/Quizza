import { Injectable } from '@angular/core';
import { BOOK } from '../mocks/book.mock';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookcaseService {


  private bookcase: Book[] = [];

  constructor() {
    this.bookcase = BOOK;
  }

  getBookcase() : Book[] {
    return this.bookcase;
  }

  getBook(bookId: number) : Book {
    let bookSelected = this.bookcase.find(element => element.id == bookId);
    if(bookSelected == undefined) {
      throw new Error("No se ha encontrado el libro");
    }
    return bookSelected;
  }

  deleteBook(bookId: number) {
    this.bookcase.forEach((element,index) =>{
      if(element.id == bookId) {
        this.bookcase.splice(index,1);
      }
    });
  }
  insertNewBook(book: Book) {
    this.bookcase.push(book);
  }
  updateBook(bookId: number, book: Book) {
    this.deleteBook(bookId);
    this.insertNewBook(book);
  }
}
