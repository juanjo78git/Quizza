import { TestBed } from '@angular/core/testing';

import { BookmarkHistoryService } from './bookmark-history.service';

describe('BookmarkHistoryService', () => {
  let service: BookmarkHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
