import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesCmpSearchingOptionComponent } from './grades-cmp-searching-option.component';

describe('GradesCmpSearchingOptionComponent', () => {
  let component: GradesCmpSearchingOptionComponent;
  let fixture: ComponentFixture<GradesCmpSearchingOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesCmpSearchingOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesCmpSearchingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
