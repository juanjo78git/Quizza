import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/common/services/notification.service';
import { UserService } from 'src/app/common/services/user.service';
import { Book, BookPage } from '../models/book.model';
import { BookcaseService } from '../services/bookcase.service';

@Component({
  selector: 'app-bookpage-edit',
  templateUrl: './bookpage-edit.component.html',
  styleUrls: ['./bookpage-edit.component.css'],
})
export class BookpageEditComponent implements OnInit {
  book: Book;
  bookpage: BookPage;

  constructor(
    private route: ActivatedRoute,
    private bookcase: BookcaseService,
    private notifier: NotificationService,
    private user: UserService,
    private formBuilder: FormBuilder
  ) {
    this.book = this.bookcase.getBook(this.route.snapshot.params.bookId);
    this.bookpage = this.bookcase.getPage(
      this.route.snapshot.params.bookId,
      this.route.snapshot.params.bookpageId
    );
  }

  ngOnInit(): void {}
}
