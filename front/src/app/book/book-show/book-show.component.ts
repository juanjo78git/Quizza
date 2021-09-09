import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { NotificationService } from 'src/app/common/services/notification.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  @Input()
  book: Book;

  bookPageId: number;

  paramsSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private bookService: BookService,private notifier : NotificationService) {
    this.book = this.bookService.getBook(this.route.snapshot.params.bookId);
    this.bookService.setCurrentBook(this.route.snapshot.params.bookId);
    if (this.route.snapshot.params.bookPageId == null) {
      this.bookPageId = 1;
    } else {
      this.bookPageId = this.route.snapshot.params.bookPageId;
    }
  }

  ngOnInit(): void {
    this.book = this.bookService.getBook(this.route.snapshot.params.bookId);
    this.bookService.setCurrentBook(this.route.snapshot.params.bookId);
    if (this.route.snapshot.params.bookPageId == null) {
      this.bookPageId = 1;
    } else {
      this.bookPageId = this.route.snapshot.params.bookPageId;
    }
    this.bookService.setCurrentPage( this.bookPageId);

    this.paramsSubscription = this.route.paramMap.subscribe(params => {
      let bookId = params.get('bookId');
      let bookPageId = params.get('bookPageId');
      if (bookId == null) {
          this.notifier.showError("No se ha seleccionado libro");
      } else {
        if (bookPageId != null) {
          this.bookPageId = +bookPageId;
          this.bookService.setCurrentPage(+bookPageId);
        }
        this.book = this.bookService.getBook(+bookId);
        this.bookService.setCurrentBook(+bookId);
      }
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  currentPage()  {
    return this.bookService.getPage( this.book.id, this.bookPageId);
  }
}
