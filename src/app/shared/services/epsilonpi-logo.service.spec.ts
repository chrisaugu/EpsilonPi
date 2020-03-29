import { TestBed } from '@angular/core/testing';

import { EpsilonpiLogoService } from './epsilonpi-logo.service';

describe('EpsilonpiLogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpsilonpiLogoService = TestBed.get(EpsilonpiLogoService);
    expect(service).toBeTruthy();
  });
});
