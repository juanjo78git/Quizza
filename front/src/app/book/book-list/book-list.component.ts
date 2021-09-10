import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../common/services/notification.service';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, private bookService: BookService, private notifier : NotificationService) { }

  ngOnInit(): void {
  }

  getBooks(): Book[] {
    return this.bookService.getBooks();
  }

  onSelectBook(book: Book) {

  }
}
