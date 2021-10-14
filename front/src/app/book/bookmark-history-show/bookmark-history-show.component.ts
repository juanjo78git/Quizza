import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common/services/notification.service';
import { Answer, Book, BookmarkHistory, BookPage } from '../models/book.model';
import { BookService } from '../services/book.service';
import { BookcaseService } from '../services/bookcase.service';
import { BookmarkHistoryService } from '../services/bookmark-history.service';

@Component({
  selector: 'app-bookmark-history-show',
  templateUrl: './bookmark-history-show.component.html',
  styleUrls: ['./bookmark-history-show.component.css'],
})
export class BookmarkHistoryShowComponent implements OnInit {
  @Input() bookId: number | undefined = undefined;

  constructor(
    private bookcase: BookcaseService,
    private book: BookService,
    private notifications: NotificationService,
    private bookmarkHistory: BookmarkHistoryService
  ) {}

  ngOnInit(): void {}

  getBookmarkHistory(bookId?: number): BookmarkHistory[] {
    return this.bookmarkHistory.getBookmarkHistory(bookId);
  }

  getAnswer(
    bookId: number,
    bookPageId: number,
    answer: number | undefined
  ): string {
    let answerResult: Answer | undefined;
    answerResult = this.bookmarkHistory.getAnswer(bookId, bookPageId, answer);
    if (answerResult != undefined) {
      return answerResult.answer;
    } else {
      return 'None';
    }
  }
  getBookpageTitle(bookId: number, bookPageId: number): string {
    let bookPage: BookPage | undefined;
    bookPage = this.bookmarkHistory.getBookPage(bookId, bookPageId);
    if (bookPage != undefined) {
      return bookPage.title;
    } else {
      return 'None';
    }
  }

  getBookTitle(bookId: number): string {
    return this.bookcase.getBook(bookId).title;
  }
  getCurrentBook(): number {
    return this.book.getCurrentBook().id;
  }
}
