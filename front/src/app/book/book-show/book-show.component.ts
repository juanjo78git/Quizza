import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { NotificationService } from 'src/app/common/services/notification.service';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  @Input()
  book: Book;

  bookPageId: number;

  constructor(private route: ActivatedRoute, private bookService: BookService,private notifications : NotificationService) {
    this.book = this.bookService.getBook(this.route.snapshot.params.bookId);
    this.bookService.setCurrentBook(this.route.snapshot.params.bookId);
    this.bookPageId = 1;
  }

  ngOnInit(): void {
    this.bookService.setCurrentPage( this.bookPageId);
  }

  currentPage()  {
    return this.bookService.getPage( this.book.id, this.bookPageId);
  }
}
