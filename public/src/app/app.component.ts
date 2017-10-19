import { Component } from '@angular/core';
import { LandingService } from './landing.service';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser;
  title = 'app';
  constructor(private _landing: LandingService, private _router: Router) { }

  inSession() {
    this._landing.inSession().subscribe(
      (response) => {
        if (response.json() !== false) {
          this._router.navigate(['/listings'])
        }
        else{
          this._router.navigate([''])
        }
        // console.log('Successful response from the server');
      },
      (err) => {
        console.log(err);
      })
    
    console.log(this.currentUser)
  }

  ngOnInit() {
    this.inSession()
  }
}
