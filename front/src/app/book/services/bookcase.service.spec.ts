import { TestBed } from '@angular/core/testing';

import { BookcaseService } from './bookcase.service';

describe('BookcaseService', () => {
  let service: BookcaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookcaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
