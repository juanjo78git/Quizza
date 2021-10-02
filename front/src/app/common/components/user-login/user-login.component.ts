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
  };
  errorMessage = '';
  subscriptions : Subscription[] = [];
  user?: User;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(this.userService.getUser().subscribe({
      next: (data) => { this.user = data},
      error: (err) => { }
    }));
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.errorMessage = this.userService.login(username, password);
  }

   ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
   }

   isLoggedIn(): boolean {
     return !(this.user == undefined || this.user.token == undefined);
   }
}
