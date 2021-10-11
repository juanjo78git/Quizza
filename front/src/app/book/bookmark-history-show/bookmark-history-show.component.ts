import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common/services/notification.service';
import { Answer, Book, BookmarkHistory, BookPage } from '../models/book.model';
import { BookService } from '../services/book.service';
import { BookcaseService } from '../services/bookcase.service';
import { BookmarkHistoryService } from '../services/bookmark-history.service';

@Component({
  selector: 'app-bookmark-history-show',
  templateUrl: './bookmark-history-show.component.html',
  styleUrls: ['./bookmark-history-show.component.css']
})
export class BookmarkHistoryShowComponent implements OnInit {

  constructor(
    private bookcase: BookcaseService,
    private book: BookService,
    private notifications: NotificationService,
    private bookmarkHistory: BookmarkHistoryService) { }

  ngOnInit(): void {
  }

  getBookmarkHistory(): BookmarkHistory[] {
    return this.bookmarkHistory.getBookmarkHistory();
  }


  getAnswer(bookPageId: number, answer: number | undefined): string {

    let answerResult = this.book.getAnswers(bookPageId).find((element) => element.id == answer);
    if (answerResult != undefined) {
      return answerResult.answer;
    } else {
      return "None"
    }
  }
  getBookpage(bookPageId: number): string {
    return this.book.getPage(bookPageId).title;
  }

  getBook(bookId: number): string {
    return this.bookcase.getBook(bookId).title;
  }

}
