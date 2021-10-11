import { Component, OnInit, Input } from '@angular/core';
import { BookPage, Answer } from '../models/book.model';
import { BookService } from '../services/book.service';
import { NotificationService } from '../../common/services/notification.service';
import { BookmarkHistoryService } from '../services/bookmark-history.service';

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
  },
})
export class BookpageShowComponent implements OnInit {
  @Input()
  showStats: boolean = false;
  private showStatsAnswers = false;
  private answerSelected!: Answer;

  constructor(
    private bookService: BookService,
    private notifications: NotificationService,
    private bookmarkHistory: BookmarkHistoryService
  ) {}

  ngOnInit(): void {
    this.showStatsAnswers = false;
  }

  getPage(): BookPage {
    return this.bookService.getCurrentPage();
  }
  getAnwers(): Answer[] {
    return this.bookService.getCurrentAnswers();
  }
  onSelectAnswer(answer: Answer): void {
    this.setAnswerSelected(answer);
    this.bookService.updateCurrentAnswerStats();
    if (this.showStats && this.bookService.getCurrentAnswers().length > 1) {
      this.setStats(true);
    } else {
      this.runAnswer();
    }
  }
  runAnswer() {
    this.setStats(false);
    this.bookService.setAnswerSelected(
      this.answerSelected,
      this.bookmarkHistory
    );
  }
  getAnswerSelected(): Answer {
    return this.answerSelected;
  }
  setAnswerSelected(answer: Answer) {
    this.answerSelected = answer;
  }
  getStats(): boolean {
    return this.showStatsAnswers;
  }
  setStats(stats: boolean) {
    this.showStatsAnswers = stats;
  }
}
