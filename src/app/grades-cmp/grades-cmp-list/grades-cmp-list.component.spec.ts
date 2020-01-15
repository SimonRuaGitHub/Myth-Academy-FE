import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesCmpListComponent } from './grades-cmp-list.component';

describe('GradesCmpListComponent', () => {
  let component: GradesCmpListComponent;
  let fixture: ComponentFixture<GradesCmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesCmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesCmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
