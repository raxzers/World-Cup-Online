import { TestBed } from '@angular/core/testing';

import { RoleGuard2Guard } from './role-guard2.guard';
import { UserService } from '../SERVICES/user/user.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

describe('RoleGuard2Guard', () => {
  let guard: RoleGuard2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,MatDialogModule]
    });
    guard = TestBed.inject(RoleGuard2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  
});
