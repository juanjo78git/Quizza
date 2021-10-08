import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  };
  errorMessage = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { username, email, password, confirmPassword } = this.form;
    this.errorMessage = this.userService.signup(username, email, password);
  }
  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}
