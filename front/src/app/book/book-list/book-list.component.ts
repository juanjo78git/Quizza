import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/common/services/user.service';
import { NotificationService } from '../../common/services/notification.service';
import { Book } from '../models/book.model';
import { BookcaseService } from '../services/bookcase.service';
import { BookmarkHistoryService } from '../services/bookmark-history.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private bookcaseService: BookcaseService,
    private notifier: NotificationService,
    private bookmarkHistory: BookmarkHistoryService,
    private user: UserService
  ) {}

  ngOnInit(): void {}

  getBooks(): Book[] {
    if (this.user.getUsername() == 'admin') {
      return this.bookcaseService.getBookcase();
    } else {
      return this.bookcaseService.getMyBookcase(this.user.getUsername());
    }
  }
  isEditable(item: Book): boolean {
    if (
      item.authorization == this.user.getUsername() ||
      this.user.getUsername() == 'admin'
    ) {
      return true;
    } else {
      return false;
    }
  }
  getLastPage(bookId: number): number {
    return this.bookmarkHistory.lastPage(bookId);
  }
}
