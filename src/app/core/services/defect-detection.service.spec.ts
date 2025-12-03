import { TestBed } from '@angular/core/testing';

import { DefectDetectionService } from './defect-detection.service';

describe('DefectDetectionService', () => {
  let service: DefectDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefectDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
