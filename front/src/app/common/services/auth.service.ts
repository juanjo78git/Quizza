import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

// TODO: Cambiar API
//const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'https://reqres.in/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
//TODO
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): User {
    //    return this.http.post(AUTH_API + 'login', {username, password, }, httpOptions);
    let user: User;
    user = {
      id: '0',
      username: username,
      avatar: 'assets/user.png',
      roles: ['DEFAULT_ROLE'],
      token: password,
    };
    return user;
  }

  signup(username: string, mail: string, password: string): User {
    //    return this.http.post(AUTH_API + 'register', {username, email, password, }, httpOptions);

    let user: User;
    user = {
      id: '0',
      username: username,
      mail: mail,
      avatar: 'assets/user.png',
      roles: ['DEFAULT_ROLE'],
      token: password,
    };
    return user;
  }
}
