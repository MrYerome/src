import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router : Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   // console.log("Je suis ton guard !");
   // return true;
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url : string): boolean {
    if (this.authService.isLog) {
      return true;
    } else {
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
      return false;
    }
  }
}
