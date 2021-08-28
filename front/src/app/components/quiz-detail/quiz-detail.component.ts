import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../../mocks/mock-questions';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {

  questions = QUESTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
