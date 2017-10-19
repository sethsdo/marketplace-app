import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingsComponent } from './listings/listings.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './landing/login/login.component';
import { RegistrationComponent } from './landing/registration/registration.component';
import { LandingService } from './landing.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BrowseComponent,
    ListingsComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
