import { TestBed } from '@angular/core/testing';

import { PrimerStateService } from './primer-state.service';

describe('PrimerStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimerStateService = TestBed.get(PrimerStateService);
    expect(service).toBeTruthy();
  });
});
