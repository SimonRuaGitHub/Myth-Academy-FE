import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListCmpComponent } from './courses-list-cmp.component';

describe('CoursesListCmpComponent', () => {
  let component: CoursesListCmpComponent;
  let fixture: ComponentFixture<CoursesListCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
