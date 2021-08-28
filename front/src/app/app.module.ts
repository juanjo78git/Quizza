import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionCreateComponent } from './components/question-create/question-create.component';
import { QuizDetailComponent } from './components/quiz-detail/quiz-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionCreateComponent,
    QuizDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
