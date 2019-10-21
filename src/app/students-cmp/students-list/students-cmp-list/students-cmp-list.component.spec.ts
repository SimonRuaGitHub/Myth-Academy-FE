import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCmpListComponent } from './students-cmp-list.component';

describe('StudentsCmpListComponent', () => {
  let component: StudentsCmpListComponent;
  let fixture: ComponentFixture<StudentsCmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsCmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
