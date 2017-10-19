import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  log = false
  reg = true
  logSwitch() {
    this.log = false;
    this.reg = true;
  }
  regSwitch() {
    this.log = true;
    this.reg = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
