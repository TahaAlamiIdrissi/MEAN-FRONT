import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message = "";
  User = {}
  constructor(private _auth: AuthenticationService,
    private router: Router,
    private flashMessageService: FlashMessagesService) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth._registerUser(this.User)
      .subscribe(res => {
        if (res.message !== "User has been Saved") {
          this.flashMessageService.show(`${res.message}`,{
            cssClass : "error",
            timeout : 2000
          })
        }else {
          this.flashMessageService.show(`${res.message}`,{
            cssClass : "success",
            timeout : 2000
          })
        }
      }, err => console.log(err));
    this.User = {}
  }
}
