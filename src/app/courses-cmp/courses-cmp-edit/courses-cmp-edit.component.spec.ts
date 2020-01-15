import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCmpEditComponent } from './courses-cmp-edit.component';

describe('CoursesCmpEditComponent', () => {
  let component: CoursesCmpEditComponent;
  let fixture: ComponentFixture<CoursesCmpEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCmpEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCmpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
