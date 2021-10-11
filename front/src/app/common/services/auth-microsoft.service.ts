import { Injectable } from '@angular/core';
import { MicrosoftLoginProvider, SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthMicrosoftService {
  private readonly provider: string = 'MICROSOFT';

  constructor(private authService: SocialAuthService) {}

  login(): void {
    this.authService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
  }
  logout(): void {
    this.authService.signOut();
  }
  refreshToken(): void {
    this.authService.refreshAuthToken(MicrosoftLoginProvider.PROVIDER_ID);
  }

  getProvider(): string {
    return this.provider;
  }
}
