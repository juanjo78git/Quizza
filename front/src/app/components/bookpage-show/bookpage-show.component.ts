import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(answer: Answer): void {

    this.bookpage = BOOK[answer.goPage -1];
  }
}
