import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../landing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users =[]
  errors;
  errmsg;
  user = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPwd: "",
  }
  constructor(private _landing: LandingService, private _router: Router) { }
  
  registerSubmit(){
    console.log(this.user)
    this._landing.create(this.user).subscribe(
      (response) => {
        console.log('Successful response from the server');
        this.displayUser()
      },
      (err) => {
        this.errors = err.json().message
        this.errmsg = err.json().errmsg
        console.log(err.json());
      })
  }


  displayUser() {
    console.log("in display")
    this._router.navigate(["/listings"])
    
  }

  ngOnInit() {
    // console.log(this.displayUser())
  }

}
