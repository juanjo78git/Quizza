import { Injectable } from '@angular/core';
import { Book, BookPage, Answer } from '../models/book.model';
import { BookcaseService } from '../services/bookcase.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private book: Book;
  private readonly firstPage: number = 1;
  private bookPageId: number;


  constructor(private bookcase: BookcaseService ) {
    this.book = this.bookcase.getBook(this.firstPage);
    this.bookPageId = this.firstPage;
  }

  getCurrentBook() : Book {
    return this.book;
  }
  setCurrentBook(bookId: number) {
    this.book = this.bookcase.getBook(bookId);
    this.setCurrentPage(this.firstPage);
  }

  getCurrentPage() : BookPage {
    let bookPage = this.book.pages.find(element => element.id == this.bookPageId);
    if(bookPage == undefined) {
      throw new Error("No se ha encontrado la página");
    }
    return bookPage;
  }
  setCurrentPage(bookPageId: number): BookPage {
    this.bookPageId = bookPageId;
    return this.getCurrentPage();
  }
  getPage(bookPageId: number) : BookPage {
    let bookPage = this.book.pages.find(element => element.id == bookPageId);
    if(bookPage == undefined) {
      throw new Error("No se ha encontrado la página");
    }
    return bookPage;
  }
  getCurrentAnswers(): Answer[] {
    return this.getCurrentPage().answers;
  }
  getAnswers(bookPageId: number) : Answer[] {
    return  this.getPage(bookPageId).answers;
  }

  setAnswerSelected(answer: Answer): BookPage {
    this.setCurrentPage(answer.goPage);
    return this.getCurrentPage();
  }

  deletePage(bookPageId: number) {
    this.book.pages.forEach((element,index) =>{
      if(element.id == bookPageId) {
        this.book.pages.splice(index,1);
      }
    });
  }
  insertNewPage(bookPage: BookPage) {
    this.book.pages.push(bookPage);
  }
  updatePage(bookPageId: number, bookPage: BookPage) {
    this.deletePage(bookPageId);
    this.insertNewPage(bookPage);
  }
}
