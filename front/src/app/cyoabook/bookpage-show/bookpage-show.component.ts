import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookPage, Answer } from '../models/book.model';

@Component({
  selector: 'app-bookpage-show',
  templateUrl: './bookpage-show.component.html',
  styleUrls: ['./bookpage-show.component.css']
})
export class BookpageShowComponent implements OnInit {

  @Input()
  bookpage: BookPage | null = null;
  @Output()
  bookpageid = new EventEmitter<number>();

  constructor() {
    this.bookpageid = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSelectAnswer(answer: Answer): void {
    this.bookpageid.emit(answer.goPage);
  }
}
