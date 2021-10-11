import { Injectable } from '@angular/core';
import { AmazonLoginProvider, SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthAmazonService {
  private readonly provider: string = 'AMAZON';

  constructor(private authService: SocialAuthService) {}

  login(): void {
    this.authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  }
  logout(): void {
    this.authService.signOut();
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(AmazonLoginProvider.PROVIDER_ID);
  }

  getProvider(): string {
    return this.provider;
  }
}
