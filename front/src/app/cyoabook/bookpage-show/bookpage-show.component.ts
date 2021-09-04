import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookPage, Answer } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-bookpage-show',
  templateUrl: './bookpage-show.component.html',
  styleUrls: ['./bookpage-show.component.css']
})
export class BookpageShowComponent implements OnInit {

  public bookpage!: BookPage;

  constructor(private bookService: BookService) {
   }

  ngOnInit(): void {
    this.bookpage = this.bookService.getCurrentPage();

  }


  onSelectAnswer(answer: Answer): void {
    this.bookpage = this.bookService.getPageAnswer(answer.bookId, answer.bookPageId, answer.id );

  }
}
