import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesCmpRegisterComponent } from './grades-cmp-register.component';

describe('GradesCmpRegisterComponent', () => {
  let component: GradesCmpRegisterComponent;
  let fixture: ComponentFixture<GradesCmpRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesCmpRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesCmpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
