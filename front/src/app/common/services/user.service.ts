import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly userDefault : User = {
    id: "0",
    username: "Nobody",
    mail: "name@domain",
    avatar: "assets/user.png",
    roles: ["DEFAULT_ROLE"]
  };
  private user : User = this.userDefault;

private user$ : BehaviorSubject<User>;

  constructor(private http: HttpClient, private auth : AuthService) {
    this.user = this.userDefault;
    this.user$ = new BehaviorSubject<User>(this.user);
   }

  getUser(): Observable<User> {
    return  this.user$.asObservable();;
  }
  setUser(user: User) {
    this.user = user;
    this.user$.next(this.user);
  }
  updateUser(user: User) {
    this.user.id = user.id;
    if(user.username != undefined) this.user.username = user.username;
    if(user.avatar != undefined) this.user.avatar = user.avatar;
    if(user.mail != undefined) this.user.mail = user.mail;
    if(user.roles != undefined) this.user.roles = user.roles;
    if(user.token != undefined) this.user.token = user.token;
    this.user$.next(this.user);
  }
  setId(id: string) {
    this.user.id = id;
    this.user$.next(this.user);
  }
  setUsername(username: string) {
    this.user.username = username;
    this.user$.next(this.user);
  }
  setMail(mail: string) {
    this.user.mail = mail;
    this.user$.next(this.user);
  }
  setAvatar(avatar: string) {
    this.user.avatar = avatar;
    this.user$.next(this.user);
  }
  setRoles(roles: []) {
    this.user.roles = roles;
    this.user$.next(this.user);
  }
  addRole(role: string) {
    this.user.roles.push(role);
    this.user$.next(this.user);
  }
  addToken(token: string) {
    this.user.token = token;
    this.user$.next(this.user);
  }

  login(username: string, password: string) : string {
    this.setUser(this.auth.login(username, password));
    return 'OK'; //TODO
  }

  logout() {
    this.user = this.userDefault;
    this.user$.next(this.user);
  }

  signup(username: string, mail: string, password: string): string {
    this.setUser(this.auth.signup(username, mail, password));
    return 'OK'; //TODO
  }

  isLoggedIn(): boolean {
    return !(this.user == undefined || this.user.token == undefined);
  }
}
