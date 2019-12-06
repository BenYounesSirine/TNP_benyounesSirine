import { TestBed } from '@angular/core/testing';

import { PdtService } from './pdt.service';

describe('PdtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdtService = TestBed.get(PdtService);
    expect(service).toBeTruthy();
  });
});
