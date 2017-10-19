import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ListingsComponent } from './listings/listings.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full'},
  { path: 'browse', component: BrowseComponent, pathMatch: 'full' },
  { path: 'listings', component: ListingsComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
