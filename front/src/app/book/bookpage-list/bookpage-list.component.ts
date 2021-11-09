import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/common/services/notification.service';
import { Book, BookPage } from '../models/book.model';
import { BookcaseService } from '../services/bookcase.service';

@Component({
  selector: 'app-bookpage-list',
  templateUrl: './bookpage-list.component.html',
  styleUrls: ['./bookpage-list.component.css'],
})
export class BookpageListComponent implements OnInit {
  @Input()
  bookId: number | undefined = undefined;
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookcase: BookcaseService,
    private notifier: NotificationService
  ) {
    if (this.route.snapshot.params.bookId != undefined) {
      this.bookId = this.route.snapshot.params.bookId;
    }
    this.book = this.bookcase.getBook(this.route.snapshot.params.bookId);
  }

  ngOnInit(): void {}

  getBookpages(): BookPage[] {
    return this.book.pages;
  }
  deleteBookpage(bookpage: BookPage) {
    this.bookcase.deletePagebook(bookpage.bookId, bookpage.id);
  }
}
