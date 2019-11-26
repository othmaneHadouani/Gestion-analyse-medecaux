import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Client} from "../model/client.model";


@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {

  constructor(private catService:CatalogueService,private modalService: NgbModal) { }

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

  closeResult: string;

  openAdd(content) {
    this.Client=new Client();
    this.modalService.open(content, { centered: true}).result.then((result) => {
      this.catService.addClient(this.Client).subscribe(
        res=>{
          this.catService.getClients('',0).subscribe(
            res=>{
              console.log("succefull load Client")
            },
            err =>{
              console.log(err)
              console.log("error load Client")
            }
          );

          console.log("succefull added Client")
        },
        err =>{
          console.log(err)
          console.log("error added Client")
        }
      );


    }, (reason) => {

    });
  }

  openEdit(content,Client) {



    this.Client = Client;


    this.modalService.open(content, { centered: true}).result.then((result) => {

      this.catService.editClient(this.Client).subscribe(
        res=>{
          console.log("succefull adEdited  Client")
        },
        err =>{
          console.log(err)
          console.log("error adEdited Client")
        }
      );
    }, (reason) => {


    });
  }


  openDelete(content,idCat) {


    this.modalService.open(content).result.then(

      (result) => {
        this.catService.onDeleteClient(idCat);

      }, (reason) => {


      });
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
