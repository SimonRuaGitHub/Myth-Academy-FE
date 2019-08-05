import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsNameComponent } from './students-name.component';

describe('StudentsNameComponent', () => {
  let component: StudentsNameComponent;
  let fixture: ComponentFixture<StudentsNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
