import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCreateComponent } from './components/question-create/question-create.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuizDetailComponent } from './components/quiz-detail/quiz-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCreateComponent,
    QuestionDetailComponent,
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
