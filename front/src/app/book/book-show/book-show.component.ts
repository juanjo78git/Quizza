import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book, BookPage } from '../models/book.model';
import { NotificationService } from 'src/app/common/services/notification.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { BookmarkHistoryService } from '../services/bookmark-history.service';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css'],
})
export class BookShowComponent implements OnInit {
  @Input()
  bookId: number;
  @Input()
  private bookPageId: number = 1;
  private showStats: boolean = false;
  private showBookmarkHistory: boolean = false;
  paramsSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private notifier: NotificationService,
    private bookmarkHistory: BookmarkHistoryService
  ) {
    this.bookService.setCurrentBook(this.route.snapshot.params.bookId);
    this.bookId = this.route.snapshot.params.bookId;
    if (this.route.snapshot.params.bookPageId == undefined) {
      this.bookPageId = 1;
    } else {
      this.bookPageId = this.route.snapshot.params.bookPageId;
    }
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params.bookId;
    this.bookService.setCurrentBook(this.route.snapshot.params.bookId);
    if (this.route.snapshot.params.bookPageId == undefined) {
      this.bookPageId = 1;
      this.bookmarkHistory.cleanBookmarkHistory(this.bookId);
    } else {
      this.bookPageId = this.route.snapshot.params.bookPageId;
    }
    this.bookService.setCurrentPage(this.bookPageId);

    this.paramsSubscription = this.route.paramMap.subscribe((params) => {
      let bookId = params.get('bookId');
      if (bookId == null) {
        throw new Error('No se ha seleccionado un libro');
      } else {
        if (this.bookId != +bookId) {
          this.bookId = +bookId;
          this.bookService.setCurrentBook(this.bookId);
          this.bookPageId = 1;
          this.bookService.setCurrentPage(this.bookPageId);
        }
      }
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  currentBook(): Book {
    return this.bookService.getCurrentBook();
  }
  currentPage(): BookPage {
    return this.bookService.getCurrentPage();
  }

  getStats(): boolean {
    return this.showStats;
  }
  setStats(showStats: boolean) {
    this.showStats = showStats;
  }

  getBookmarkHistory(): boolean {
    return this.showBookmarkHistory;
  }
  setBookmarkHistory(showBookmarkHistory: boolean) {
    this.showBookmarkHistory = showBookmarkHistory;
  }
}
