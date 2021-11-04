import { Injectable } from '@angular/core';
import { BOOK } from '../mocks/book.mock';
import { Book, BookPage } from '../models/book.model';
import { LocalStorageService } from '../../common/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BookcaseService {
  private bookcase: Book[] = [];

  constructor(private localStorageService: LocalStorageService) {
    if (!this.loadBookcase()) {
      this.bookcase = BOOK;
      this.saveBookcase();
    }
  }

  getBookcase(): Book[] {
    return this.bookcase;
  }

  getBook(bookId: number): Book {
    let bookSelected = this.bookcase.find((element) => element.id == bookId);
    if (bookSelected == undefined) {
      throw new Error('No se ha encontrado el libro');
    }
    return bookSelected;
  }

  getPage(bookId: number, bookPageId: number): BookPage {
    let bookSelected = this.bookcase.find((element) => element.id == bookId);
    if (bookSelected == undefined) {
      throw new Error('No se ha encontrado el libro');
    }
    let bookPage = bookSelected.pages.find(
      (element) => element.id == bookPageId
    );
    if (bookPage == undefined) {
      throw new Error('No se ha encontrado la página');
    }
    return bookPage;
  }
  updatePagebook(bookId: number, bookpageId: number, bookpage: BookPage) {
    if (bookId == bookpage.id && bookpageId == bookpage.id) {
      this.deletePagebook(bookId, bookpageId);
      this.insertPagebook(bookId, bookpage);
    }
  }
  deletePagebook(bookId: number, bookpageId: number) {
    this.bookcase.forEach((element, index) => {
      if (element.id == bookId) {
        element.pages.forEach((elementPage, index) => {
          if (elementPage.id == bookpageId) {
            element.pages.splice(index, 1);
          }
        });
      }
    });
  }
  insertPagebook(bookId: number, bookpage: BookPage) {
    if (bookId == bookpage.bookId) {
      this.bookcase.forEach((element, index) => {
        if (element.id == bookId) {
          element.pages.push(bookpage);
        }
      });
    }
  }

  deleteBook(bookId: number) {
    this.bookcase.forEach((element, index) => {
      if (element.id == bookId) {
        this.bookcase.splice(index, 1);
      }
    });
  }
  insertNewBook(book: Book) {
    this.bookcase.push(book);
  }
  updateBook(bookId: number, book: Book) {
    if (bookId == book.id) {
      this.deleteBook(bookId);
      this.insertNewBook(book);
    }
  }

  loadBookcase(): boolean {
    let z: Book[] = this.localStorageService.get('bookcase');
    if (z == undefined) {
      this.bookcase = [];
      return false;
    } else {
      this.bookcase = this.localStorageService.get('bookcase');
      return true;
    }
  }
  saveBookcase() {
    this.localStorageService.set('bookcase', this.bookcase);
  }

  getNewId(): number {
    let max = 0;
    this.bookcase.forEach((data) => {
      if (data.id > max) {
        max = data.id;
      }
    });
    return max + 1;
  }
}
