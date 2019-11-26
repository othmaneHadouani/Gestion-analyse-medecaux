import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";
import {eraseStyles} from "../../../node_modules/@angular/animations/browser/src/util";


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {


  constructor(public catService:CatalogueService,
              private  router:Router){}

  ngOnInit(): void {
    this.getClients();

  }

  private getClients() {
    this.catService.getClients().subscribe(
      res=>{
           console.log("sucsseful load Clients")
      },
      err =>{
        console.log("err load Clients")
      }
    );
  }

  getProductsByCat(c) {
    console.log(c)
    this.catService.currentClient=c;
    this.router.navigateByUrl('acceuil/analyses/2/'+c.id);
  }


}
