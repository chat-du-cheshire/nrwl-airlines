import { TestBed } from '@angular/core/testing';

import { FeatureShellService } from './feature-shell.service';

describe('FeatureShellService', () => {
  let service: FeatureShellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureShellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
