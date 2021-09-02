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

  getPage(bookId: number, bookPageId: number) : BookPage {
    return this.books[bookId-1].pages[bookPageId-1];
  }

  getBook(bookId: number) : Book {
    return this.books[bookId - 1];
  }

  getBooks() : Book[] {
    return this.books;
  }
}
