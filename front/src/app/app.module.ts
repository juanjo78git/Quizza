import { NgModule, ErrorHandler  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalErrorHandler } from './common/global-error-handler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookModule } from './book/book.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptor } from './common/server-error.interceptor';
import { MessagesComponent } from './common/components/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    MatSnackBarModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BookModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
