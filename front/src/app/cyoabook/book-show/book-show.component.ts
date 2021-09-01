import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../services/book.service';
//import { BookService } from '../cyoabook.module';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  @Input()
  book: Book;

  bookpageid: number = 1;

  constructor(private bookService: BookService) {
    this.book = this.bookService.getBook();
  }

  ngOnInit(): void {
  }
  receiveMessage($event: number) {
    this.bookpageid = $event;
  }
  currentPage()  {
    return this.bookService.getPage(this.bookpageid);
  }
}