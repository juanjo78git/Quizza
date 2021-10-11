import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalErrorHandler } from './common/global-error-handler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookModule } from './book/book.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptor } from './common/helpers/server-error.interceptor';
import { MessagesComponent } from './common/components/messages/messages.component';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';
import { MenuComponent } from './common/components/menu/menu.component';
import { UserSignupComponent } from './common/components/user-signup/user-signup.component';
import { UserLoginComponent } from './common/components/user-login/user-login.component';
import { UserProfileComponent } from './common/components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './common/components/home/home.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider,
  AmazonLoginProvider,
  MicrosoftLoginProvider,
} from 'angularx-social-login';
import { AuthInterceptor } from './common/helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ErrorPageComponent,
    MenuComponent,
    UserSignupComponent,
    UserLoginComponent,
    UserProfileComponent,
    HomeComponent,
  ],
  imports: [
    MatSnackBarModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BookModule,
    BrowserAnimationsModule,
    FormsModule,
    SocialLoginModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '283360580524-4r5c2ivdepbdcdgfp0387joqgt828t9q.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('574050800586055'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'amzn1.application-oa2-client.4f09be24512c473291d0d0b6c56fc8fd'
            ),
          },
          {
            //TODO: Change ID
            id: MicrosoftLoginProvider.PROVIDER_ID,
            provider: new MicrosoftLoginProvider(
              '7ba366e7-96e5-4d73-a95c-7707684edc0f'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
