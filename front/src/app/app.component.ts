import { Component } from '@angular/core';
import { UserService } from './common/services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Quizza';

  constructor(private user: UserService) {}

  ngOnInit() {
    //this.user.loadUserStorage();
    console.log('RECUPERA USUARIO: ' + this.user.loadUserStorage());
  }
}
