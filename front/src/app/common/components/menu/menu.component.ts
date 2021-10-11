import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
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
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  logout(): void {
    this.userService.logout();
  }
}
