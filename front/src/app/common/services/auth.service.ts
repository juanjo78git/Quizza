import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// TODO: Cambiar API
//const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'https://reqres.in/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
// TODO: Cambiar any
  login(username: string, password: string): Observable<any> {
//    return this.http.post(AUTH_API + 'signin', {
      return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }
// TODO: Cambiar any
  register(username: string, email: string, password: string): Observable<any> {
//    return this.http.post(AUTH_API + 'signup', {
    return this.http.post(AUTH_API + 'register', {
      username,
      email,
      password
    }, httpOptions);
  }
}
