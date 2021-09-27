import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalErrorHandler } from './common/global-error-handler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookModule } from './book/book.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptor } from './common/server-error.interceptor';
import { MessagesComponent } from './common/components/messages/messages.component';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';
import { MenuComponent } from './common/components/menu/menu.component';
import { UserRegisterComponent } from './common/components/user-register/user-register.component';
import { UserLoginComponent } from './common/components/user-login/user-login.component';
import { UserProfileComponent } from './common/components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ErrorPageComponent,
    MenuComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserProfileComponent,
  ],
  imports: [
    MatSnackBarModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BookModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
