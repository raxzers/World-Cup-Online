import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/SERVICES/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  Role: string;
  constructor(private auth: UserService, private router: Router) { }
  canActivate(): boolean {
    /*
      this.Role=this.auth.IsLoggedIn();
      if (this.Role == "admin") {
      
        return true;
      }
      else {
        this.router.navigate(['/login']);
        
        return false;
      }
      */
    return true;
  }

}
