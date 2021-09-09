import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookShowComponent } from './book/book-show/book-show.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book', component: BookListComponent },
  { path: 'book/:bookId/show', component: BookShowComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
