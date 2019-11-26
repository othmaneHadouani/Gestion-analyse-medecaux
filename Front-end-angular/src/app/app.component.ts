import {Component, OnInit} from '@angular/core';
import {CatalogueService} from './services/catalogue.service';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  clicked1:boolean=false;
  clicked2:boolean=false;
  clicked3:boolean=false;
  currentClient;

  constructor(
              public catService:CatalogueService,
              private  router:Router,
              public authService:AuthenticationService
  ){}

  ngOnInit(): void {

  }

  onSelectedAnalyses() {
    this.catService.currentClient=undefined;
    this.router.navigateByUrl("");
    this.clicked1=true
    this.clicked2=this.clicked3=false

  }


  onLogin() {
    this.catService.currentClient=undefined;
    this.router.navigateByUrl('/login');
  }


  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  doSearch(data){

     if( this.catService.currentClient){

       console.log("ah")
       this.router.navigateByUrl("acceuil/analyses/2/"+this.catService.currentClient.id+"/"+data.motCle);
     }
   

     else {
       this.catService.currentClient=undefined
       this.router.navigateByUrl("acceuil/analyses/1/0/"+data.motCle);
     }

  }

  onGoToAnalyseGestion(){
    this.router.navigateByUrl("/gestion-analyse")
  }

  onGoToClientGestion(){
    this.router.navigateByUrl("/gestion-client")
  }

  onGoToUtilisateurGestion(){
    this.router.navigateByUrl("/gestion-user")
  }


}
