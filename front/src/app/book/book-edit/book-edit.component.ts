import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/common/services/notification.service';
import { UserService } from 'src/app/common/services/user.service';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';
import { BookcaseService } from '../services/bookcase.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  @Input()
  book: Book;

  form: any = {
    id: null,
    title: null,
    version: null,
    description: null,
    author: null,
    mediaType: null,
    mediaURL: null,
  };
  errorMessage = '';

  constructor(private route: ActivatedRoute,
    private bookcase: BookcaseService,
    private notifier: NotificationService,
    private user: UserService,
  ) {
    this.book = this.bookcase.getBook(this.route.snapshot.params.bookId);

  }

  ngOnInit(): void {
    this.book = this.bookcase.getBook(this.route.snapshot.params.bookId);

    this.form.id = this.book.id;
    this.form.title = this.book.title;
    this.form.version = this.book.version;
    this.form.description = this.book.description;
    this.form.author = this.book.author;
    this.form.mediaType = this.book.mediaType;
    this.form.mediaURL = this.book.mediaURL;

  }

  onSubmit(): void {
    const {id, title, version, description, author, mediaType, mediaURL, } = this.form;
    this.errorMessage = '';
    if (id == null || id == undefined || id != this.book.id) {
      this.errorMessage = 'ERROR con el ID del libro';
    }

    this.book.title = title;
    this.book.version = version;
    this.book.description = description;
    this.book.author = author;
    if (mediaType != null && mediaType != undefined
      && mediaURL != null && mediaURL != undefined) {
      this.book.mediaType = mediaType;
      this.book.mediaURL = mediaURL;
    }
    if ((mediaType != null || mediaType != undefined)
      && (mediaURL == null || mediaURL == undefined)) {
        this.errorMessage = 'URL is void and media Type is selected';
    }
    if ((mediaType == null || mediaType == undefined)
    && (mediaURL != null || mediaURL != undefined)) {
      this.errorMessage = 'URL with data but media Type is not selected';
    }
    this.bookcase.updateBook(id, this.book);
  }

}
