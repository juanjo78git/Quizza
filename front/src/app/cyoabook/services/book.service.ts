import { Injectable } from '@angular/core';
import { Book, BookPage } from '../models/book.model';
import { BOOK} from '../mocks/book.mock';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [];

  constructor() {
    this.books.push(BOOK);

  }

  getBooks() : Book[] {
    return this.books;
  }

  getBook(bookId: number) : Book {
    return this.books[bookId - 1];
  }

  getPage(bookId: number, bookPageId: number) : BookPage {
    return this.books[bookId-1].pages[bookPageId-1];
  }

  getPageAnswer(bookId: number, bookPageId: number, answerId: number) : BookPage {
    let newPage: number = this.books[bookId-1].pages[bookPageId-1].answers[answerId-1].goPage;
    return  this.books[bookId-1].pages[newPage];
  }

}
