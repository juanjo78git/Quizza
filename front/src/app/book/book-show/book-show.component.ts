import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book, BookPage } from '../models/book.model';
import { NotificationService } from 'src/app/common/services/notification.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  @Input()
  bookId: number;
  bookPageId: number;

  paramsSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private bookService: BookService,private notifier : NotificationService) {
    this.bookService.setCurrentBook(this.route.snapshot.params.bookId);
    this.bookId = this.route.snapshot.params.bookId;
    this.bookPageId = 1;
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params.bookId;
    this.bookService.setCurrentBook(this.route.snapshot.params.bookId);
    this.bookPageId = 1;
    this.bookService.setCurrentPage( this.bookPageId);

    this.paramsSubscription = this.route.paramMap.subscribe(params => {
      let bookId = params.get('bookId');
      if (bookId == null) {
          throw new Error("No se ha seleccionado un libro");
      } else {
        if (this.bookId != +bookId) {
          this.bookId = +bookId;
          this.bookService.setCurrentBook(this.bookId);
          this.bookPageId = 1;
          this.bookService.setCurrentPage( this.bookPageId);
        }
      }
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  currentBook() : Book {
    return this.bookService.getBook( this.bookId);
  }
  currentPage() : BookPage {
    return this.bookService.getPage( this.bookId, this.bookPageId);
  }
}
