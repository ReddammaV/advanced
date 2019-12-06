import { TestBed, async, inject } from '@angular/core/testing';

import { ChildactivateGuard } from './childactivate.guard';

describe('ChildactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildactivateGuard]
    });
  });

  it('should ...', inject([ChildactivateGuard], (guard: ChildactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
