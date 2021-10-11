import { TestBed } from '@angular/core/testing';

import { AuthFacebookService } from './auth-facebook.service';

describe('AuthFacebookService', () => {
  let service: AuthFacebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFacebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
