import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  currentUser = ''
  constructor(private _landing: LandingService, private _router: Router) { }

  displayUser() {
    this._landing.inSession().subscribe(
      (response) => {
        if (response.json() !== false) {
          console.log(response.json())
          this.currentUser = response.json()
        }
        else {
          this._router.navigate([''])
        }
      },
      (err) => {
        console.log(err);
      })
  }
  onLogout() {
    this._landing.logout()
    this._router.navigate([''])
  }

  ngOnInit() {
    this.displayUser()
  }

}
