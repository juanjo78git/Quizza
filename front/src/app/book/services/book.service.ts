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
    this.book = this.books[bookId-1];
  }

  getCurrentPage() : BookPage {
    return this.book.pages[this.bookPageId-1];
  }
  setCurrentPage(bookPageId: number) {
    this.bookPageId = bookPageId;
  }

  getBook(bookId: number) : Book {
    return this.books[bookId - 1];
  }

  getPage(bookId: number, bookPageId: number) : BookPage {

    return this.books[bookId-1].pages[bookPageId-1];
  }

  getPageAnswer(bookId: number, bookPageId: number, answerId: number) : BookPage {
    let newPage: number = this.books[bookId-1].pages[bookPageId-1].answers[answerId-1].goPage;
    this.setCurrentPage(newPage);
    return  this.books[bookId-1].pages[newPage-1];
  }

}
