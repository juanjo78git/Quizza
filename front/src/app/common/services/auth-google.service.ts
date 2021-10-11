import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {
  private readonly provider: string = 'GOOGLE';

  constructor(private authService: SocialAuthService) {}

  login(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logout(): void {
    this.authService.signOut();
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getProvider(): string {
    return this.provider;
  }
}
