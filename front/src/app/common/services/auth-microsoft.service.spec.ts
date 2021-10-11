import { TestBed } from '@angular/core/testing';

import { AuthMicrosoftService } from './auth-microsoft.service';

describe('AuthMicrosoftService', () => {
  let service: AuthMicrosoftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthMicrosoftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
