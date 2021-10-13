import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookpageShowComponent } from './bookpage-show/bookpage-show.component';
import { BookShowComponent } from './book-show/book-show.component';
import { BookService } from './services/book.service';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';
import { BookmarkHistoryShowComponent } from './bookmark-history-show/bookmark-history-show.component';

@NgModule({
  declarations: [
    BookShowComponent,
    BookpageShowComponent,
    BookListComponent,
    BookmarkHistoryShowComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BookShowComponent,
    BookpageShowComponent,
    BookListComponent,
    BookmarkHistoryShowComponent,
  ],
  providers: [BookService],
})
export class BookModule {}
