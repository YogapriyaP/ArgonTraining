import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate } from './routeGuards/canActivate.guard';
import { canActivateChild } from './routeGuards/canActivateChild.guards';
import { ChildComponent } from './child/child.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { canDeactivate } from './routeGuards/canDeactivate.guards';
import { CanLoadGuard } from './routeGuards/can-load.guard';


const routes: Routes = [
  {path:'first',component:FirstPageComponent,children:[{
    path:'child',component:SecondPageComponent
  }],canDeactivate:[canDeactivate]
  },
  {path:'second',component:SecondPageComponent,canLoad:[CanLoadGuard]}
]; // sets up the routes constant where we define the routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
