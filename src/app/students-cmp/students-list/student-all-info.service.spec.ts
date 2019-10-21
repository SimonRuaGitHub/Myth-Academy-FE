import { TestBed } from '@angular/core/testing';

import { StudentAllInfoService } from './student-all-info.service';

describe('StudentAllInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentAllInfoService = TestBed.get(StudentAllInfoService);
    expect(service).toBeTruthy();
  });
});
