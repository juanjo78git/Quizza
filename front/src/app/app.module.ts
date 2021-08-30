import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookListComponent } from './components/book-list/book-list.component';
import { BookpageShowComponent } from './components/bookpage-show/bookpage-show.component';
import { BookpageCreateComponent } from './components/bookpage-create/bookpage-create.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookShowComponent } from './components/book-show/book-show.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookpageShowComponent,
    BookpageCreateComponent,
    BookCreateComponent,
    BookShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
