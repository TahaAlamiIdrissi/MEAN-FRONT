import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl = "http://localhost:3000/api/users/register";
  private _loginUrl = "http://localhost:3000/api/users/login";
  

  constructor(private http: HttpClient,
              private router: Router) { }

  _registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  _loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
  _loggedIn() {
    return !!localStorage.getItem('token');
  }
  
  _logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  _getToken() {
    return localStorage.getItem('token');
  }
}
