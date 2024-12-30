import { TestBed } from '@angular/core/testing';

import { RepairPartService } from './repair-part.service';

describe('RepairPartService', () => {
  let service: RepairPartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairPartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
