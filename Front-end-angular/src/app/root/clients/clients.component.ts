import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../../services/catalogue.service";
import {Client} from "../../model/client.model";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private catService:CatalogueService, private  router:Router) { }

  public Client;

  ngOnInit() {

    this.catService.getClients('',0).subscribe(
      res=>{

        console.log("sucsseful load Clients")
      },
      err =>{
        console.log("err load Clients")
      }
    );


  }


  getAnalyses(id){

      this.router.navigateByUrl("acceuil/analyses/2/"+id);

  }

  getPage(motCle,page){

    this.catService.getClients(motCle.value,page).subscribe(
      res=>{
        console.log("succefull load categorie")
      },
      err =>{
        console.log(err)
        console.log("error load categorie")
      }
    );

  }

  doSearch(data){

    console.log(data)

    this.catService.getClients(data.motCle,0).subscribe(
      res=>{
        console.log("succefull load Clients")
      },
      err =>{
        console.log(err)
        console.log("error load Clients")
      }
    );

  }
}
