import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCmpComponent } from './courses-cmp.component';

describe('CoursesCmpComponent', () => {
  let component: CoursesCmpComponent;
  let fixture: ComponentFixture<CoursesCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
