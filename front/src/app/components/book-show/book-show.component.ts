import { Component, OnInit, Input } from '@angular/core';
import {BOOK} from '../../mocks/mock-book';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  @Input()
  book = BOOK;

  constructor() { }

  ngOnInit(): void {
  }

}
