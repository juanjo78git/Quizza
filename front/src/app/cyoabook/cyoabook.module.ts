import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookpageShowComponent } from './bookpage-show/bookpage-show.component';
import { BookShowComponent } from './book-show/book-show.component';
import { BookService } from './book.service';


@NgModule({
  declarations: [
    BookShowComponent,
    BookpageShowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookShowComponent,
    BookpageShowComponent
  ],
  providers: [
    BookService
  ]
})
export class CYOABookModule { }
