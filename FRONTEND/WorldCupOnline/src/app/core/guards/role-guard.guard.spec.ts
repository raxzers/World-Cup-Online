import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';

import { RoleGuardGuard } from './role-guard.guard';

describe('RoleGuardGuard', () => {
  let guard: RoleGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, ToastrModule.forRoot(),MatDialogModule]
    });
    guard = TestBed.inject(RoleGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
