import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCmpRegisterComponent } from './courses-cmp-register.component';

describe('CoursesCmpRegisterComponent', () => {
  let component: CoursesCmpRegisterComponent;
  let fixture: ComponentFixture<CoursesCmpRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCmpRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCmpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
