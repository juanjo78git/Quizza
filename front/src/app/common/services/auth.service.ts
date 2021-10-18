import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

// TODO: Cambiar API
//const AUTH_API = 'http://localhost:8080/api/auth/';
//const AUTH_API = 'https://reqres.in/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly provider: string = 'QUIZZA';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): User {
    //    return this.http.post(AUTH_API + 'login', {username, password, }, httpOptions);
    let user: User;
    user = {
      id: Math.trunc(Math.random() * 1000).toString(),
      username: username,
      avatar: 'assets/user.png',
      roles: ['DEFAULT_ROLE'],
      token: password,
      provider: this.provider,
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
      provider: this.provider,
    };
    return user;
  }

  refreshToken(token: string): string {
    //    return this.http.post(AUTH_API + 'refreshToken', {token, }, httpOptions);
    return token;
  }

  getProvider(): string {
    return this.provider;
  }
}
