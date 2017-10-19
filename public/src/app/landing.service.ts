import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class LandingService {

  constructor(private _http: Http) { }

  inSession(){
    // return this._http.get("/api/inSession").map(data => data.json()).toPromise();
    return this._http.get('/api/inSession')
  }

  display() {
    return this._http.get("/api/dashboard").map(data => data.json()).toPromise()
  }
  
  create(user) {
    return this._http.post('/api/create', user)
  }

  login(user) {
    return this._http.post('/api/login', user) 
  }
  logout(){
    return this._http.get('/api/logout')
      .subscribe(
      (response) => {
        console.log('Successful response from the server');
      },
      (err) => {
        console.log(err);
      })
  }

}
