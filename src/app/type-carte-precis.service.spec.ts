import { TestBed } from '@angular/core/testing';

import { TypeCartePrecisService } from './type-carte-precis.service';

describe('TypeCartePrecisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeCartePrecisService = TestBed.get(TypeCartePrecisService);
    expect(service).toBeTruthy();
  });
});
