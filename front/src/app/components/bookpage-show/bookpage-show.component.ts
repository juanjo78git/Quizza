import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BOOKPAGE} from '../../mocks/mock-bookpage';
import { BookPage, Answer } from '../../models/bookpage';
import {BOOK} from '../../mocks/mock-book';

@Component({
  selector: 'app-bookpage-show',
  templateUrl: './bookpage-show.component.html',
  styleUrls: ['./bookpage-show.component.css']
})
export class BookpageShowComponent implements OnInit {

  @Input()
  bookpage = BOOKPAGE;
  @Output()
  bookpageid = new EventEmitter<number>();

  constructor() {
    this.bookpageid = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSelectAnswer(answer: Answer): void {
    this.bookpageid.emit(answer.goPage -1);
  }
}
