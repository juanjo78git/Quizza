import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkHistoryShowComponent } from './bookmark-history-show.component';

describe('BookmarkHistoryShowComponent', () => {
  let component: BookmarkHistoryShowComponent;
  let fixture: ComponentFixture<BookmarkHistoryShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookmarkHistoryShowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkHistoryShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
