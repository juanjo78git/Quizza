import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { SocialAuthService } from 'angularx-social-login';
import { AuthGoogleService } from './auth-google.service';
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
    provider: this.auth.getProvider(),
    token: undefined,
  };
  private user: User = this.userDefault;

  private user$: BehaviorSubject<User>;
  subscriptions: Subscription[] = [];

  constructor(
    private auth: AuthService,
    private authServiceGoogle: SocialAuthService,
    private authGoogle: AuthGoogleService
  ) {
    this.user = this.userDefault;
    this.user$ = new BehaviorSubject<User>(this.user);
    // TODO: GOOGLE - Meter en AuthGoogleService
    this.subscriptions.push(
      this.authServiceGoogle.authState.subscribe((userGoogle) => {
        if (userGoogle != null) {
          this.user.avatar = userGoogle.photoUrl;
          this.user.username = userGoogle.name;
          this.user.mail = userGoogle.email;
          this.user.id = userGoogle.id;
          this.user.provider = 'GOOGLE';
          this.user.token = userGoogle.idToken;
          this.user$.next(this.user);
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
  getId(): string {
    return this.user.id;
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
  setToken(token: string) {
    this.user.token = token;
    this.user$.next(this.user);
  }

  login(provider: string, username?: string, password?: string): string {
    switch (provider) {
      case this.authGoogle.getProvider(): {
        this.authGoogle.login();
        break;
      }
      default: {
        if (username != undefined && password != undefined) {
          this.setUser(this.auth.login(username, password));
        }
      }
    }
    return 'OK'; //TODO
  }

  logout() {
    switch (this.getProvider()) {
      case this.authGoogle.getProvider(): {
        this.authGoogle.logout();
        break;
      }
      default: {
      }
    }
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

  getToken(): string | undefined {
    if (this.user.token != undefined) {
      return this.user.token;
    } else {
      return undefined;
    }
  }
  getProvider(): string {
    return this.user.provider;
  }
  refreshToken(): void {
    let token = this.getToken();
    if (token != undefined) {
      switch (this.getProvider()) {
        case this.authGoogle.getProvider(): {
          this.authGoogle.refreshToken();
          break;
        }
        default: {
          this.setToken(this.auth.refreshToken(token));
          this.user$.next(this.user);
        }
      }
    }
  }
  destroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
