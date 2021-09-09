import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { BookPage, Answer } from '../models/book.model';
import { BookService } from '../services/book.service';
import { NotificationService } from '../../common/services/notification.service';

@Component({
  selector: 'app-bookpage-show',
  templateUrl: './bookpage-show.component.html',
  styleUrls: ['./bookpage-show.component.css']
})
export class BookpageShowComponent implements OnInit {

  public bookpage!: BookPage;

  constructor(private bookService: BookService, private notifications : NotificationService) {
   }

  ngOnInit(): void {
    this.bookpage = this.bookService.getCurrentPage();
  }

  onSelectAnswer(answer: Answer): void {
    this.bookpage = this.bookService.getPageAnswer(answer.bookId, answer.bookPageId, answer.id );
  }
}
