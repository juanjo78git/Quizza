import { Component, OnInit, Input } from '@angular/core';
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
import { BookService } from '../services/book.service';
import { BookcaseService } from '../services/bookcase.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  @Input()
  book: Book;
  bookForm: FormGroup;
  submitted: boolean = false;
  errorMessage = '';

  mediaTypes = [
    { name: 'Image', value: 'img' },
    { name: 'Video', value: 'video' },
  ];

  constructor(
    private route: ActivatedRoute,
    private bookcase: BookcaseService,
    private notifier: NotificationService,
    private user: UserService,
    private formBuilder: FormBuilder
  ) {
    this.book = this.bookcase.getBook(this.route.snapshot.params.bookId);
    this.bookForm = this.formBuilder.group({}); // TODO: Quitar
  }

  ngOnInit(): void {
    this.submitted = false;
    this.book = this.bookcase.getBook(this.route.snapshot.params.bookId);
    this.bookForm = this.formBuilder.group(
      {
        bookId: [this.book.id, [Validators.required]],
        title: [
          this.book.title,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        version: [
          this.book.version,
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
            Validators.pattern('^[0-9]d*(.[0-9]d*)*$'),
          ],
        ],
        description: [
          this.book.description,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(500),
          ],
        ],
        author: [
          this.book.author,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(500),
          ],
        ],
        //      mediaValidation: this.formBuilder.group ( {
        mediaType: [this.book?.mediaType, [Validators.maxLength(50)]],
        mediaURL: [
          this.book?.mediaURL,
          [Validators.maxLength(500), Validators.pattern('http[s]?://.+')],
        ],
        //      }),
      }
      /*    //TODO Add Form Validations Directives
    ,{
      validator: this.validateMedia("mediaType", "mediaURL"),
    }
      */
    );
  }

  validateMedia(controlNameMedia: string, controlNameURL: string) {
    return (formGroup: FormGroup) => {
      const controlMedia = formGroup.controls[controlNameMedia];
      const controlURL = formGroup.controls[controlNameURL];
      if (controlURL.errors && !controlURL.errors.validateMedia) {
        return;
      }
      if (controlMedia.value != null && controlURL.value == null) {
        controlURL.setErrors({ validateMedia: true });
      }
      if (controlMedia.value == null && controlURL.value != null) {
        controlURL.setErrors({ validateMedia: true });
      } else {
        controlURL.setErrors(null);
      }
    };
  }

  getForm() {
    return this.bookForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (this.bookForm.invalid) {
      this.errorMessage = 'ERROR';
      return;
    }
    //TODO:  mover a validaciones
    if (
      this.bookForm.value.bookId == null ||
      this.bookForm.value.bookId == undefined ||
      this.bookForm.value.bookId != this.book.id
    ) {
      this.errorMessage = 'ERROR with book ID';
      return;
    }
    if (
      this.bookForm.value?.mediaType != undefined &&
      this.bookForm.value?.mediaType != '' &&
      this.bookForm.value?.mediaType != null &&
      (this.bookForm.value?.mediaURL == undefined ||
        this.bookForm.value?.mediaURL == null ||
        this.bookForm.value?.mediaURL == '')
    ) {
      this.errorMessage = 'ERROR: Media type and URL no mismatch';
      return;
    }
    if (
      (this.bookForm.value?.mediaType == undefined ||
        this.bookForm.value?.mediaType == null ||
        this.bookForm.value?.mediaType == '') &&
      this.bookForm.value?.mediaURL != undefined &&
      this.bookForm.value?.mediaURL != null &&
      this.bookForm.value?.mediaURL != ''
    ) {
      this.errorMessage = 'ERROR: Media URL and type no mismatch';
      return;
    }

    this.book.title = this.bookForm.value.title;
    this.book.version = this.bookForm.value.version;
    this.book.description = this.bookForm.value.description;
    this.book.author = this.bookForm.value.author;
    if (
      this.bookForm.value?.mediaType != undefined &&
      this.bookForm.value?.mediaURL != undefined
    ) {
      this.book.mediaType = this.bookForm.value?.mediaType;
      this.book.mediaURL = this.bookForm.value?.mediaURL;
    }
    this.bookcase.updateBook(this.bookForm.value.bookId, this.book);
    this.notifier.showSuccess('Updated');
  }

  onReset() {
    this.submitted = false;
    //this.bookForm.reset();
  }

  getBookpages(): BookPage[] {
    return this.book.pages;
  }
}
