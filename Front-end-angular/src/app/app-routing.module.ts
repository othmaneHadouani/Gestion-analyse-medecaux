import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnalysesComponent} from './root/analyses/analyses.component';
import {LoginComponent} from './login/login.component';

import {AuthGuardServiceService} from "./services/auth-guard-service.service";
import {AuthenticationService} from "./services/authentication.service";
import {EditUserComponent} from "./login/edit-user/edit-user.component";
import {RootComponent} from "./root/root.component";
import {GestionAnalyseComponent} from "./gestion-analyse/gestion-analyse.component";
import {GestionClientComponent} from "./gestion-client/gestion-client.component";
import {GestionUserComponent} from "./gestion-user/gestion-user.component";
import {ClientsComponent} from "./root/clients/clients.component";

const routes: Routes = [

  {path:'',redirectTo:'acceuil',pathMatch:'full',resolve: {
      someKey: AuthenticationService
  }},
  {path:'login', component:LoginComponent},
  {path:'edit-user', component:EditUserComponent,canActivate: [AuthGuardServiceService]},
  {path:'gestion-analyse', component:GestionAnalyseComponent,canActivate: [AuthGuardServiceService]},
  {path:'gestion-client', component:GestionClientComponent,canActivate: [AuthGuardServiceService]},
  {path:'gestion-user', component:GestionUserComponent,canActivate: [AuthGuardServiceService]},
  {path:'acceuil', component:RootComponent,
    children:[
      {path:'',redirectTo:'clients/1/0',pathMatch:'full'},
      {path:'analyses/:p1/:p2',component:AnalysesComponent},
      {path:'clients/:p1/:p2',component:ClientsComponent},
    ],canActivate: [AuthGuardServiceService]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

