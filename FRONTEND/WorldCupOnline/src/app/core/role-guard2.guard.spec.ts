import { TestBed } from '@angular/core/testing';

import { RoleGuard2Guard } from './role-guard2.guard';

describe('RoleGuard2Guard', () => {
  let guard: RoleGuard2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleGuard2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
