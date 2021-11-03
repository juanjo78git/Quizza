import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpageEditComponent } from './bookpage-edit.component';

describe('BookpageEditComponent', () => {
  let component: BookpageEditComponent;
  let fixture: ComponentFixture<BookpageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookpageEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
