import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookpageShowComponent } from './bookpage-show/bookpage-show.component';
import { BookShowComponent } from './book-show/book-show.component';
import { BookService } from './services/book.service';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';
import { BookmarkHistoryShowComponent } from './bookmark-history-show/bookmark-history-show.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookpageListComponent } from './bookpage-list/bookpage-list.component';
import { BookpageEditComponent } from './bookpage-edit/bookpage-edit.component';
@NgModule({
  declarations: [
    BookShowComponent,
    BookpageShowComponent,
    BookListComponent,
    BookmarkHistoryShowComponent,
    BookEditComponent,
    BookpageListComponent,
    BookpageEditComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    BookShowComponent,
    BookpageShowComponent,
    BookListComponent,
    BookmarkHistoryShowComponent,
    BookpageEditComponent,
  ],
  providers: [BookService],
})
export class BookModule {}
