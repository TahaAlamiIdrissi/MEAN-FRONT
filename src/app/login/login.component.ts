import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User = {}
  constructor(private _auth: AuthenticationService,
    private _router: Router,
    private flashMessageService: FlashMessagesService) { }
  ngOnInit() {
    
  }

  loginUser() {
    this._auth._loginUser(this.User)
      .subscribe(res => {
        localStorage.setItem('token', res);
        this._router.navigate(['/projects'], this.User);
      },
        err => {
          this.flashMessageService.show(`${err.error}`, {
            cssClass: "error",
            timeout: 2000
          })
          console.log(err.error)
        });
  }
}
