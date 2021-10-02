import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userDefault: User = {
    id: '0',
    username: 'Nobody',
    mail: 'name@domain',
    avatar: 'assets/user.png',
    roles: ['DEFAULT_ROLE'],
  };
  private user: User = this.userDefault;

  // TODO: GOOGLE
  userGoogle?: SocialUser;

  private user$: BehaviorSubject<User>;
  subscriptions: Subscription[] = [];

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private authServiceGoogle: SocialAuthService
  ) {
    this.user = this.userDefault;
    this.user$ = new BehaviorSubject<User>(this.user);
    // TODO: GOOGLE
    this.subscriptions.push(
      this.authServiceGoogle.authState.subscribe((userGoogle) => {
        this.userGoogle = userGoogle;
        if (userGoogle != null) {
          this.user.avatar = userGoogle.photoUrl;
          this.user.username = userGoogle.name;
          this.user.mail = userGoogle.email;
          this.user.id = userGoogle.id;
          this.user.token = userGoogle.idToken;
        }
      })
    );
  }

  getUser(): Observable<User> {
    return this.user$.asObservable();
  }
  setUser(user: User) {
    this.user = user;
    this.user$.next(this.user);
  }
  updateUser(user: User) {
    this.user.id = user.id;
    if (user.username != undefined) this.user.username = user.username;
    if (user.avatar != undefined) this.user.avatar = user.avatar;
    if (user.mail != undefined) this.user.mail = user.mail;
    if (user.roles != undefined) this.user.roles = user.roles;
    if (user.token != undefined) this.user.token = user.token;
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

  login(username: string, password: string): string {
    this.setUser(this.auth.login(username, password));
    return 'OK'; //TODO
  }

  logout() {
    this.user = this.userDefault;
    this.user$.next(this.user);
    this.logoutWithGoogle();
  }

  signup(username: string, mail: string, password: string): string {
    this.setUser(this.auth.signup(username, mail, password));
    return 'OK'; //TODO
  }

  isLoggedIn(): boolean {
    return !(this.user == undefined || this.user.token == undefined);
  }

  //TODO GOOGLE
  loginWithGoogle(): void {
    this.authServiceGoogle.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logoutWithGoogle(): void {
    this.authServiceGoogle.signOut();
  }
  refreshTokenGoogle(): void {
    this.authServiceGoogle.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  destroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
