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
    if (
      this.route.snapshot.params.bookpageId != undefined &&
      this.route.snapshot.params.bookpageId != null
    ) {
      this.bookpage = this.bookcase.getPage(
        this.route.snapshot.params.bookId,
        this.route.snapshot.params.bookpageId
      );
    } else {
      this.bookpage = {
        id: 0,
        bookId: this.route.snapshot.params.bookId,
        title: '',
        type: 'choose',
        text: '',
        answers: [],
      };
    }
    this.bookpageForm = this.formBuilder.group({}); // TODO: Quitar
  }

  ngOnInit(): void {
    this.submitted = false;
    this.book = this.bookcase.getBook(this.route.snapshot.params.bookId);
    if (
      this.route.snapshot.params.bookpageId != undefined &&
      this.route.snapshot.params.bookpageId != null
    ) {
      this.bookpage = this.bookcase.getPage(
        this.route.snapshot.params.bookId,
        this.route.snapshot.params.bookpageId
      );
    } else {
      this.bookpage = {
        id: 0,
        bookId: this.route.snapshot.params.bookId,
        title: '',
        type: 'choose',
        text: '',
        answers: [],
      };
    }
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
      answers: this.formBuilder.array([]),
      redirect: this.formBuilder.array([]),
    });

    let linesAnswers = this.getAnswersForm();
    this.bookpage.answers.forEach((item, index) => {
      let answersFormGroup = this.formBuilder.group({
        id: [item.id, [Validators.required]],
        bookPageId: [item.bookPageId, [Validators.required]],
        bookId: [item.bookId, [Validators.required]],
        answer: [item.answer, [Validators.required]],
        goPage: [item.goPage, [Validators.required]],
        stats: 0,
        statsPc: 0,
      });
      linesAnswers.push(answersFormGroup);
      if (item.statsPc == undefined) {
        item.statsPc = 0;
      }
      linesAnswers.at(index).setValue(item);
    });
    if (this.bookpage.redirect != undefined && this.bookpage.redirect != null) {
      let linesRedirects = this.getRedirectForm();
      this.bookpage.redirect.forEach((item, index) => {
        let redirectFormGroup = this.formBuilder.group({
          id: [item.id, [Validators.required]],
          bookId: item.bookId,
          bookPageId: [item.bookPageId, [Validators.required]],
          answerId: [null],
          goPage: [item.goPage, [Validators.required]],
        });
        linesRedirects.push(redirectFormGroup);
        linesRedirects.at(index).patchValue({
          id: item.id,
          bookId: item.bookId,
          bookPageId: item.bookPageId,
          answerId: item.AnswerId == undefined ? null : item.AnswerId,
          goPage: item.goPage,
        });
        //linesRedirects.at(index).setValue(item);
      });
    }
  }

  getAnswersForm(): FormArray {
    return this.bookpageForm.get('answers') as FormArray;
  }

  insertAnswerForm() {
    let answersFormGroup = this.formBuilder.group({
      id: [this.getAnswersForm().length + 1, [Validators.required]],
      bookPageId: [this.bookpage.id, [Validators.required]],
      bookId: this.bookpage.bookId,
      answer: ['', [Validators.required]],
      goPage: [null, [Validators.required]],
      stats: 0,
      statsPc: 0,
    });
    this.getAnswersForm().push(answersFormGroup);
  }
  deleteAnswerForm(index: number) {
    this.getAnswersForm().removeAt(index);
  }

  getRedirectForm(): FormArray {
    return this.bookpageForm.get('redirect') as FormArray;
  }

  insertRedirectForm() {
    let redirectFormGroup = this.formBuilder.group({
      id: [this.getRedirectForm().length + 1, [Validators.required]],
      bookId: this.bookpage.bookId,
      bookPageId: [null, [Validators.required]],
      answerId: [null],
      goPage: [null, [Validators.required]],
    });
    this.getRedirectForm().push(redirectFormGroup);
  }
  deleteRedirectForm(index: number) {
    this.getRedirectForm().removeAt(index);
  }

  getForm() {
    return this.bookpageForm.controls;
  }
  getPage(bookpageId: number): BookPage {
    return this.bookcase.getPage(this.book.id, bookpageId);
  }

  getAnswersPage(bookpageId: number | null): Answer[] {
    if (bookpageId != null && bookpageId != 0) {
      return this.bookcase.getPage(this.book.id, bookpageId).answers;
    } else {
      return [];
    }
  }
  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (this.bookpageForm.invalid) {
      this.errorMessage = 'ERROR ';
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

    if (this.getAnswersForm().controls.length == 0) {
      this.errorMessage = 'ERROR: At least one answer is required';
      return;
    }
    this.bookpage.answers.splice(0, this.bookpage.answers.length);
    this.getAnswersForm().controls.forEach((item) => {
      this.bookpage.answers.push(item.value);
    });

    this.bookpage.redirect?.splice(0, this.bookpage.redirect.length);
    this.bookpage.redirect = [];
    this.getRedirectForm().controls.forEach((item) => {
      this.bookpage.redirect?.push(item.value);
    });
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
