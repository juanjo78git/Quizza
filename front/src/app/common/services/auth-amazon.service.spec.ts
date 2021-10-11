import { TestBed } from '@angular/core/testing';

import { AuthAmazonService } from './auth-amazon.service';

describe('AuthAmazonService', () => {
  let service: AuthAmazonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAmazonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
