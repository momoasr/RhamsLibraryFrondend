import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponents } from './books.component';

describe('BooksComponent', () => {
  let component: BookComponents;
  let fixture: ComponentFixture<BookComponents>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponents]
    });
    fixture = TestBed.createComponent(BookComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
