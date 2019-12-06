import { TestBed } from '@angular/core/testing';

import { InmemoryService } from './inmemory.service';

describe('InmemoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InmemoryService = TestBed.get(InmemoryService);
    expect(service).toBeTruthy();
  });
});
