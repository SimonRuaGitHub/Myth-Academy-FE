import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCmpComponent } from './students-cmp.component';

describe('StudentsCmpComponent', () => {
  let component: StudentsCmpComponent;
  let fixture: ComponentFixture<StudentsCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
