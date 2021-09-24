import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../common/services/notification.service';
import { Book } from '../models/book.model';
import { BookcaseService } from '../services/bookcase.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private bookcaseService: BookcaseService,
    private notifier: NotificationService
  ) {}

  ngOnInit(): void {}

  getBooks(): Book[] {
    return this.bookcaseService.getBookcase();
  }

  onSelectBook(book: Book) {}
}
