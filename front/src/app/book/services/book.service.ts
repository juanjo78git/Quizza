import { Injectable } from '@angular/core';
import { Book, BookPage } from '../models/book.model';
import { BOOK} from '../mocks/book.mock';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [];
  private book;
  private bookPageId: number = 0;


  constructor() {
    this.books = BOOK;
    this.book = this.books[0];
  }

  getBooks() : Book[] {
    return this.books;
  }

  getCurrentBook() : Book {
    return this.book;
  }
  setCurrentBook(bookId: number) {
    let book = this.books.find(element => element.id == bookId);
    if(book == undefined) {
      throw new Error("No se ha encontrado el libro");
    } else {
      this.book = book;
    }
  }

  getCurrentPage() : BookPage {
    let bookPage = this.book.pages.find(element => element.id == this.bookPageId);
    if(bookPage == undefined) {
      throw new Error("No se ha encontrado la página");
    }
    return bookPage;
  }
  setCurrentPage(bookPageId: number) {
    this.bookPageId = bookPageId;
  }

  getBook(bookId: number) : Book {
    let book = this.books.find(element => element.id == bookId);
    if(book == undefined) {
      throw new Error("No se ha encontrado el libro");
    }
    return book;
  }

  getPage(bookId: number, bookPageId: number) : BookPage {

    let book = this.books.find(element => element.id == bookId);
    if(book == undefined) {
      throw new Error("No se ha encontrado el libro");
    }
    let bookPage = book.pages.find(element => element.id == bookPageId);
    if(bookPage == undefined) {
      throw new Error("No se ha encontrado la página del libro");
    }
    return bookPage;
  }

  getPageAnswer(bookId: number, bookPageId: number, answerId: number) : BookPage {
    let book = this.books.find(element => element.id == bookId);
    if(book == undefined) {
      throw new Error("No se ha encontrado el libro");
    }
    let bookPage = book.pages.find(element => element.id == bookPageId);
    if(bookPage == undefined) {
      throw new Error("No se ha encontrado la página");
    }
    let answer = bookPage.answers.find(element => element.id == answerId);
    if(answer == undefined) {
      throw new Error("No se ha encontrado la respuesta");
    }
    let bookPageNew = book.pages.find(element => element.id == answer?.goPage);
    if(bookPageNew == undefined) {
      throw new Error("No se ha encontrado la página destino");
    }
    this.setCurrentPage(bookPageNew.id);
    return bookPageNew;

  }

}
