import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AnalysesComponent } from './root/analyses/analyses.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TokenInterceptorService} from "./services/token-interceptor.service";
import { JwtModule } from "@auth0/angular-jwt";
import { EditUserComponent } from './login/edit-user/edit-user.component';
import {RootComponent} from "./root/root.component";
import { GestionAnalyseComponent } from './gestion-analyse/gestion-analyse.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { GestionUserComponent } from './gestion-user/gestion-user.component';
import { ClientsComponent } from './root/clients/clients.component';



@NgModule({
  declarations: [
    AppComponent,
    AnalysesComponent,
    LoginComponent,
    RootComponent,
    EditUserComponent,
    GestionAnalyseComponent,
    GestionClientComponent,
    GestionUserComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule,NgbModule,NgbPaginationModule, NgbAlertModule,ReactiveFormsModule
  ],
  providers: [
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})

export class AppModule {


}
