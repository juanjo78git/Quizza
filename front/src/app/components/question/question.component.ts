import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';
import { QUESTION } from '../../mocks/mock-question';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question = QUESTION;

  constructor() { }

  ngOnInit(): void {
  }

}
