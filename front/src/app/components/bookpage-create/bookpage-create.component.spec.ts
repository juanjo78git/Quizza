import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpageCreateComponent } from './bookpage-create.component';

describe('BookpageCreateComponent', () => {
  let component: BookpageCreateComponent;
  let fixture: ComponentFixture<BookpageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookpageCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
