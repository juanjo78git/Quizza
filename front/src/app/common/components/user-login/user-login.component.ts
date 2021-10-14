import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    switchKeepMeLoggedIn: false,
  };
  errorMessage = '';
  subscriptions: Subscription[] = [];
  user?: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.userService.getUser().subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => {},
      })
    );
  }

  onSubmit(): void {
    const { username, password, switchKeepMeLoggedIn } = this.form;
    this.errorMessage = this.userService.login('NONE', username, password);
    if (switchKeepMeLoggedIn && this.isLoggedIn()) {
      this.userService.saveUserStorage();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  loginWithGoogle() {
    this.userService.login('GOOGLE');
  }
  loginWithFacebook() {
    this.userService.login('FACEBOOK');
  }
  loginWithAmazon() {
    this.userService.login('AMAZON');
  }
  loginWithMicrosoft() {
    this.userService.login('MICROSOFT');
  }
}
