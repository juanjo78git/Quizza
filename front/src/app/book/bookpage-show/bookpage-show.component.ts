import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { BookPage, Answer } from '../models/book.model';
import { BookService } from '../services/book.service';
import { NotificationService } from '../../common/services/notification.service';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-bookpage-show',
  templateUrl: './bookpage-show.component.html',
  styleUrls: ['./bookpage-show.component.css'],
  host: {
    // Sets the role for this component to "progressbar"
    role: 'progressbar',

    // Sets the minimum and maximum values for the progressbar role.
    'aria-valuemin': '0',
    'aria-valuemax': '100',

    // Binding that updates the current value of the progressbar.
    '[attr.aria-valuenow]': 'value',
  }
})
export class BookpageShowComponent implements OnInit {

  private viewStats : boolean = false;
  private answerSelected!: Answer;

  constructor(private bookService: BookService, private notifications : NotificationService) {
   }

  ngOnInit(): void {
    this.viewStats = false;
  }

  getPage(): BookPage {
    return this.bookService.getCurrentPage();
  }
  getAnwers(): Answer[] {
    return this.bookService.getCurrentAnswers();
  }
  onSelectAnswer(answer: Answer): void {
    this.setAnswerSelected(answer);
    this.setStats(true);
//    this.bookService.setAnswerSelected(this.answerSelected);
  }
  runAnswer() {
    this.setStats(false);
    this.bookService.setAnswerSelected(this.answerSelected);
  }
  getAnswerSelected(): Answer {
    return this.answerSelected;
  }
  setAnswerSelected(answer: Answer) {
    this.answerSelected = answer;
  }
  getStats() : boolean {
    return this.viewStats;
  }
  setStats(stats: boolean) {
    this.viewStats = stats;
  }
}
