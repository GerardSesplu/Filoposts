import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs'; 
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: UsersService){}

  canActivate(): boolean {

    if (this.auth.isAuth() ){

      console.log('acceso correcto');
      return true
      
    } else {

      console.log('acceso denegado');
      return false;
      
      }
  }
}