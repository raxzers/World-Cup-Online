import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../SERVICES/user/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard2Guard implements CanActivate {
  Role: string;
  constructor(private auth: UserService, private router: Router) { }
  canActivate(): boolean {

    this.Role = this.auth.IsLoggedIn();
    if (this.Role == "user") {

      return true;
    }
    else {
      this.router.navigate(['/login']);

      return false;
    }
  }
}

