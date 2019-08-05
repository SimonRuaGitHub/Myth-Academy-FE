import { TestBed } from '@angular/core/testing';

import { StudentRegistrationService } from './student-registration.service';

describe('StudentRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentRegistrationService = TestBed.get(StudentRegistrationService);
    expect(service).toBeTruthy();
  });
});
