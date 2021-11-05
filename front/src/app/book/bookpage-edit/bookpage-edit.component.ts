import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormArray,
  Form,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/common/services/notification.service';
import { UserService } from 'src/app/common/services/user.service';
import { Answer, Book, BookPage } from '../models/book.model';
import { BookcaseService } from '../services/bookcase.service';

@Component({
  selector: 'app-bookpage-edit',
  templateUrl: './bookpage-edit.component.html',
  styleUrls: ['./bookpage-edit.component.css'],
})
export class BookpageEditComponent implements OnInit {
  book: Book;
  bookpage: BookPage;

  bookpageForm: FormGroup;
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
    this.bookpage = this.bookcase.getPage(
      this.route.snapshot.params.bookId,
      this.route.snapshot.params.bookpageId
    );
    this.bookpageForm = this.formBuilder.group({}); // TODO: Quitar
  }

  ngOnInit(): void {
    this.submitted = false;
    this.book = this.bookcase.getBook(this.route.snapshot.params.bookId);
    this.bookpageForm = this.formBuilder.group({
      bookId: [this.bookpage.bookId, [Validators.required]],
      bookpageId: [this.bookpage.id, [Validators.required]],
      title: [
        this.bookpage.title,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      type: [this.bookpage.type, [Validators.required]],
      mediaType: [this.bookpage?.mediaType, [Validators.maxLength(50)]],
      mediaURL: [
        this.bookpage?.mediaURL,
        [Validators.maxLength(500), Validators.pattern('http[s]?://.+')],
      ],
      text: [
        this.bookpage.text,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(500),
        ],
      ],
      question: [
        this.bookpage.question,
        [Validators.minLength(1), Validators.maxLength(500)],
      ],
      //TODO: answers with add and delete
      answers: this.formBuilder.array(this.bookpage.answers),
      //TODO: redirect with add and delete
      //redirect: this.formBuilder.array([]),
    });
  }

  getAnswersForm(): FormArray {
    return this.bookpageForm.get('answers') as FormArray;
  }

  insertAnswerForm() {
    let answersFormGroup = this.formBuilder.group({
      id: this.getAnswersForm().length +1,
      bookPageId: this.bookpage.id,
      bookId: this.bookpage.bookId,
      answer: '',
      goPage: 0,
      stats: 0,
    });
    this.getAnswersForm().push(answersFormGroup);
  }
  deleteAnswerForm(index: number) {
    this.getAnswersForm().removeAt(index);
  }

  getForm() {
    return this.bookpageForm.controls;
  }
  getPage(bookpageId: number): BookPage {
    return this.bookcase.getPage(this.book.id, bookpageId);
  }

  getAnswersPage(bookpageId: number): Answer[] {
    return this.bookcase.getPage(this.book.id, bookpageId).answers;
  }
  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (this.bookpageForm.invalid) {
      this.errorMessage = 'ERROR';
      return;
    }
    //TODO:  mover a validaciones
    if (
      this.bookpageForm.value.bookId == null ||
      this.bookpageForm.value.bookId == undefined ||
      this.bookpageForm.value.bookId != this.bookpage.bookId
    ) {
      this.errorMessage = 'ERROR with book ID';
      return;
    }
    if (
      this.bookpageForm.value.bookpageId == null ||
      this.bookpageForm.value.bookpageId == undefined ||
      this.bookpageForm.value.bookpageId != this.bookpage.id
    ) {
      this.errorMessage = 'ERROR with bookpage ID';
      return;
    }
    if (
      this.bookpageForm.value?.mediaType != undefined &&
      this.bookpageForm.value?.mediaType != '' &&
      this.bookpageForm.value?.mediaType != null &&
      (this.bookpageForm.value?.mediaURL == undefined ||
        this.bookpageForm.value?.mediaURL == null ||
        this.bookpageForm.value?.mediaURL == '')
    ) {
      this.errorMessage = 'ERROR: Media type and URL no mismatch';
      return;
    }
    if (
      (this.bookpageForm.value?.mediaType == undefined ||
        this.bookpageForm.value?.mediaType == null ||
        this.bookpageForm.value?.mediaType == '') &&
      this.bookpageForm.value?.mediaURL != undefined &&
      this.bookpageForm.value?.mediaURL != null &&
      this.bookpageForm.value?.mediaURL != ''
    ) {
      this.errorMessage = 'ERROR: Media URL and type no mismatch';
      return;
    }

    this.bookpage.title = this.bookpageForm.value.title;
    this.bookpage.text = this.bookpageForm.value.text;
    this.bookpage.question = this.bookpageForm.value.question;
    if (
      this.bookpageForm.value?.mediaType != undefined &&
      this.bookpageForm.value?.mediaURL != undefined
    ) {
      this.bookpage.mediaType = this.bookpageForm.value?.mediaType;
      this.bookpage.mediaURL = this.bookpageForm.value?.mediaURL;
    }

    //TODO: update answers
    //TODO: update redirect

    this.bookcase.updatePagebook(
      this.bookpageForm.value.bookId,
      this.bookpageForm.value.bookpageId,
      this.bookpage
    );
    this.notifier.showSuccess('Updated');
  }

  onReset() {
    this.submitted = false;
    this.getAnswersForm().clear();
    //this.bookpageForm.reset();
  }
}
