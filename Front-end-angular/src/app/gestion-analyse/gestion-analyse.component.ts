import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Analyse} from "../model/analyse.model";
import {Client} from "../model/client.model";


@Component({
  selector: 'app-gestion-analyse',
  templateUrl: './gestion-analyse.component.html',
  styleUrls: ['./gestion-analyse.component.css']
})
export class GestionAnalyseComponent implements OnInit {

  constructor(private catService:CatalogueService,private modalService: NgbModal) { }

  analyse=new Analyse();

  Client:Array<Client> =new Array<Client>()


  ngOnInit() {

    this.catService.getClients().subscribe(
      res=>{

        this.Client=res;
        console.log("sucsseful load Client")
      },
      err =>{
        console.log("err load Client")
      }
    );

    this.catService.getAnalyses("",0).subscribe(
      res=>{
        console.log("succefull load Analyse")
      },
      err =>{
        console.log(err)
        console.log("error load Analyse")
      }
    );

    }

  closeResult: string;

  openAdd(content) {
    this.analyse=new Analyse();
    this.modalService.open(content, { centered: true}).result.then((result) => {
      this.catService.addAnalyse(this.analyse).subscribe(
        res=>{
          this.catService.getAnalyses().subscribe(
            res=>{
              console.log("succefull load Analyse")
            },
            err =>{
              console.log(err)
              console.log("error load Analyse")
            }
          );

          console.log("succefull added Analyse")
        },
        err =>{
          console.log(err)
          console.log("error added Analyse")
        }
      );

      }, (reason) => {

    });
  }

  openEdit(content,Analyse) {



    this.analyse = Analyse;


    this.modalService.open(content, { centered: true}).result.then((result) => {

      this.catService.editAnalyse(this.analyse).subscribe(
        res=>{
          console.log("succefull adEdited  Analyse")
        },
        err =>{
          console.log(err)
          console.log("error adEdited Analyse")
        }
      );
    }, (reason) => {


    });
  }


  openDelete(content,idAnalyse) {


    this.modalService.open(content).result.then(

      (result) => {
        this.catService.onDeleteAnalyse(idAnalyse);

    }, (reason) => {


    });
  }

  getPage(motCle,page){

    this.catService.getAnalyses(motCle.value,page).subscribe(
      res=>{
        console.log("succefull load Analyse")
      },
      err =>{
        console.log(err)
        console.log("error load Analyse")
      }
    );

  }

  doSearch(data){

    console.log(data)

    this.catService.getAnalyses(data.motCle,0).subscribe(
      res=>{
        console.log("succefull load Analyse")
      },
      err =>{
        console.log(err)
        console.log("error load Analyse")
      }
    );

  }



}
