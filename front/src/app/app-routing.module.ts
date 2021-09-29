import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookShowComponent } from './book/book-show/book-show.component';
import { ErrorPageComponent } from './common/components/error-page/error-page.component';
import { UserLoginComponent } from './common/components/user-login/user-login.component';
import { UserProfileComponent } from './common/components/user-profile/user-profile.component';
import { UserSignupComponent } from './common/components/user-signup/user-signup.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book', component: BookListComponent },
  { path: 'book/:bookId/show', component: BookShowComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
