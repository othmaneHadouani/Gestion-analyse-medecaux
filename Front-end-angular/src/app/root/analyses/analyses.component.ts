import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../../services/catalogue.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {

  constructor(
    public catService:CatalogueService,
    private route:ActivatedRoute,
    private router:Router,
    private authService:AuthenticationService) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd ) {
        let url = val.url;
        let p1=this.route.snapshot.params.p1;
        if(p1==1){

          this.getclients();
        }

        else if (p1==2){

          let idCat=this.route.snapshot.params.p2;
          this.getAnalysesByClient(idCat);

        }

      }
    });
    let p1=this.route.snapshot.params.p1;

    if(p1==1){
      this.getclients();
    }
  }

  private getclients(motCle="",page=0) {
    this.catService.getAnalyses(motCle,page).subscribe(
      res=>{
        console.log("succefull load Aanalyse")
      },
      err =>{
        console.log("error load Analyse")
      }
    );
  }


  private getAnalysesByClient(idCat,motCle="",page=0){

    this.catService.getAnalysesByCat(idCat,motCle,page).subscribe(
      res=>{
        console.log("succefull load analyse")
      },
      err =>{
        console.log("error load analyse")
      }
    );

  }
  private getPage(motCle,page){

    if(this.catService.currentClient){
      this.getAnalysesByClient(this.catService.currentClient.id,motCle.value,page)
    }
    else {
      this.getclients(motCle.value,page)
    }
  }

  private doSearch(data){


    if(this.catService.currentClient){
      this.getAnalysesByClient(this.catService.currentClient.id,data.motCle)
    }
    else {
      this.getclients(data.motCle)
    }

  }

}
