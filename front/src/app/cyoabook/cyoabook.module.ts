import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookpageShowComponent } from './bookpage-show/bookpage-show.component';
import { BookShowComponent } from './book-show/book-show.component';



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
  ]
})
export class CYOABookModule { }
