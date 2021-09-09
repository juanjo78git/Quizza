import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShowComponent } from './book-show.component';

describe('BookShowComponent', () => {
  let component: BookShowComponent;
  let fixture: ComponentFixture<BookShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
