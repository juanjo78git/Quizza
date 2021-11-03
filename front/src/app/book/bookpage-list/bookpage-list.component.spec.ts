import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpageListComponent } from './bookpage-list.component';

describe('BookpageListComponent', () => {
  let component: BookpageListComponent;
  let fixture: ComponentFixture<BookpageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookpageListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
