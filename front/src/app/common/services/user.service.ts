import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

// TODO: Cambiar API
const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private defaultUser : User = {  id: "0",
  username: "Nobody",
  mail: "name@domain",
  avatar: "assets/user.png",
  roles: ["DEFAULT_ROLE"]
};

private user = new Subject<User>();

  constructor(private http: HttpClient) {
    this.user.next(this.defaultUser);
   }
  // TODO: Cambiar any
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUser(): Observable<User> {
    return  this.user.asObservable();;
  }
  setUser(user: User) {
    this.user.next(user);
  }
}
