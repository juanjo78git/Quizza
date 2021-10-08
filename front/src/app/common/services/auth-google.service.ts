import { Injectable } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  private readonly provider: string = 'GOOGLE';
  userGoogle?: SocialUser;

  constructor(private authServiceGoogle: SocialAuthService) {}

  login(): void {
    this.authServiceGoogle.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logout(): void {
    this.authServiceGoogle.signOut();
  }
  refreshToken(): void {
    this.authServiceGoogle.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getProvider(): string {
    return this.provider;
  }
}
