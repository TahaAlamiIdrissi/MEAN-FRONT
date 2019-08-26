import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router,
    private _auth: AuthenticationService) {}

    canActivate():boolean {
      if(this._auth._loggedIn())
        return true;
      else{
        this._router.navigate(['/login']);
        return false;
      }
        

    }
}
