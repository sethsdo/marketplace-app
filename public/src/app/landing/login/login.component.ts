import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../landing.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors;
  errmsg;
  login = {
    email: "",
    password: "",
  }
  constructor(private _landing: LandingService, private _router: Router) { }

  loginSubmit(){
    console.log(this.login)
    this._landing.login(this.login).subscribe(
      (response) => {
        console.log('Successful response from the server');
        this.displayUser()
      },
      (err) => {
        this.errors = err.json()
        this.errmsg = err.json().errmsg
        console.log(err.json());
      })
  }

  displayUser() {
    console.log("in display")
    this._router.navigate(["/listings"])

  }


  ngOnInit() {
  }

}
