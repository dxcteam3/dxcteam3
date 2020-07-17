import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { LoginGuard } from './service/login.guard';
import { AuthGuard } from './service/auth.guard';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home',component:DashboardComponent,canActivate:[AuthGuard]},
 
  {path:'prof',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'trans',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'uBill',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'balCheck',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'acc',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'mini',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'perio',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'withdraw',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'deposit',component:DashboardComponent,canActivate:[AuthGuard]},

  
  {path:'login',component:LoginComponent,canActivate:[LoginGuard]},
  {path:'reg',component:RegistrationComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
