import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookShowComponent } from './cyoabook/book-show/book-show.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'book', component: BookShowComponent },
  { path: 'book/:bookId', component: BookShowComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
