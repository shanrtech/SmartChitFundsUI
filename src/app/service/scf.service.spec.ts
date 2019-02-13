import { TestBed } from '@angular/core/testing';

import { ScfService } from './scf.service';

describe('ScfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScfService = TestBed.get(ScfService);
    expect(service).toBeTruthy();
  });
});
