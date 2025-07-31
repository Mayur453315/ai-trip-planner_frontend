import { TestBed } from '@angular/core/testing';

import { AiTripService } from './ai-trip.service';

describe('AiTripService', () => {
  let service: AiTripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiTripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
