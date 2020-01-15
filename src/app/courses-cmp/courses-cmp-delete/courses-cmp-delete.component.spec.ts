import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCmpDeleteComponent } from './courses-cmp-delete.component';

describe('CoursesCmpDeleteComponent', () => {
  let component: CoursesCmpDeleteComponent;
  let fixture: ComponentFixture<CoursesCmpDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCmpDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCmpDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
