import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BOOK} from '../mocks/book.mock';

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
