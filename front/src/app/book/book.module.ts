import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookpageShowComponent } from './bookpage-show/bookpage-show.component';
import { BookShowComponent } from './book-show/book-show.component';
import { BookService } from './services/book.service';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BookShowComponent,
    BookpageShowComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BookShowComponent,
    BookpageShowComponent,
    BookListComponent
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
