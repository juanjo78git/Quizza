import { Injectable } from '@angular/core';
import { Book } from './models/bookpage';
import { BOOK} from './mocks/mock-book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private book: Book;

  constructor() {
    this.book = BOOK;

  }

  getPage(page: number) {
    return this.book.pages[page-1];
  }
  getBook(){
    return this.book;
  }

}
