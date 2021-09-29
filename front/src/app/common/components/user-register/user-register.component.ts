import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { username, email, password, confirmPassword } = this.form;

    this.authService.register(username, email, password, confirmPassword).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      },
    });
  }
}
