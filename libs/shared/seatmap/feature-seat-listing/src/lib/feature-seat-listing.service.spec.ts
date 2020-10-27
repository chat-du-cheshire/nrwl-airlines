import { TestBed } from '@angular/core/testing';

import { FeatureSeatListingService } from './feature-seat-listing.service';

describe('FeatureSeatListingService', () => {
  let service: FeatureSeatListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureSeatListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
