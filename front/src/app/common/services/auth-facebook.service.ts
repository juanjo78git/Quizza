import { Injectable } from '@angular/core';
import {
  FacebookLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
@Injectable({
  providedIn: 'root'
})
export class AuthFacebookService {
  private readonly provider: string = 'FACEBOOK';
  userFacebook?: SocialUser;

  constructor(private authServiceGoogle: SocialAuthService) { }


  login(): void {
    this.authServiceGoogle.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  logout(): void {
    this.authServiceGoogle.signOut();
  }
  refreshToken(): void {
    this.authServiceGoogle.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID);
  }

  getProvider(): string {
    return this.provider;
  }
}
