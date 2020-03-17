import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private authservice: AuthService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authservice.userLogin();
      // if(this.authservice.isLogged){
      //   console.log(this.authservice.isLogged)
      //   return true;
      //   // return this.authservice.userLogin();
      // }
      // else{
      //   window.alert('you have no permission to access this route,Redirecting to Home');
      //   this.router.navigate([''])
      // }
    }
    
  }
  