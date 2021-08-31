import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpageShowComponent } from './bookpage-show.component';

describe('BookpageShowComponent', () => {
  let component: BookpageShowComponent;
  let fixture: ComponentFixture<BookpageShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookpageShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpageShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
