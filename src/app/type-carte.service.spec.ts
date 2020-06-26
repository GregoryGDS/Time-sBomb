import { TestBed } from '@angular/core/testing';

import { TypeCarteService } from './type-carte.service';

describe('TypeCarteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeCarteService = TestBed.get(TypeCarteService);
    expect(service).toBeTruthy();
  });
});
