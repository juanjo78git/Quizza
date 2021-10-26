import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookShowComponent } from './book/book-show/book-show.component';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';
import { HomeComponent } from './common/components/home/home.component';
import { UserLoginComponent } from './common/components/user-login/user-login.component';
import { UserProfileComponent } from './common/components/user-profile/user-profile.component';
import { UserSignupComponent } from './common/components/user-signup/user-signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookListComponent },
  { path: 'book/:bookId/show/:bookPageId', component: BookShowComponent },
  { path: 'book/:bookId/show', component: BookShowComponent },
  { path: 'book/:bookId/edit', component: BookEditComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'error/:messageKey', component: ErrorPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
