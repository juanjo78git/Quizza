import { Injectable } from '@angular/core';
import {
  FacebookLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';
@Injectable({
  providedIn: 'root',
})
export class AuthFacebookService {
  private readonly provider: string = 'FACEBOOK';

  constructor(private authService: SocialAuthService) {}

  login(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  logout(): void {
    this.authService.signOut();
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID);
  }

  getProvider(): string {
    return this.provider;
  }
}
