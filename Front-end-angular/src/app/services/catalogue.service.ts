import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {map} from "rxjs/operators";
import {Client} from "../model/client.model";
import {Analyse} from "../model/analyse.model";


export class DataCat {
  constructor(private  analyses ){

  }
}


@Injectable({
  providedIn: 'root'
})
export class CatalogueService implements Resolve<DataCat> {
  public host:string="http://localhost:8080";

  public currentClient
  public clients: Array<Client>;
  public analyses: Array<Analyse>;
  public listClients: Array<Client>;
  public aboutAnalyses:any;
  public aboutClients:any;
  constructor(private http:HttpClient) {
  }

  public getanalyse(url){
    return this.http.get(this.host+url);
  }


  addAnalyse(analyse:Analyse){
    return this.http.post(this.host+"/analyses/addAnalyse/",analyse).pipe(
      map((res :Analyse) =>{

        return res;
    })
    )
  }

  addClient(client:Client){
    return this.http.post(this.host+"/clients/addClient/",client).pipe(
      map((res :Client) =>{
        return res;
      })
    )
  }

  editAnalyse(analyse:Analyse){
    return this.http.put(this.host+"/analyses/editAnalyse/",analyse).pipe(
      map((res :Analyse) =>{

        return res;
      })
    )
  }
  editClient(client:Client){
    return this.http.put(this.host+"/clients/editClient/",client).pipe(
      map((res :Client) =>{
        return res;
      })
    )
  }
  onDeleteAnalyse(idAnalyse){

    return this.http.delete(this.host+"/analyses/delete/"+idAnalyse).subscribe(
      res =>{
        this.analyses = [...this.analyses.filter( analyse => analyse.id !=idAnalyse )]
      },
      err =>{
        console.log(err)
      }
    );
  }

  onDeleteClient(idCat){

    return this.http.delete(this.host+"/clients/delete/"+idCat).subscribe(
      res =>{
        this.clients = [...this.clients.filter( cat => cat.id !=idCat )]
      },
      err =>{
        console.log(err)
      }
    );
  }

  public getAnalyses(motCle?:string,page?:number) : Observable<Analyse[]>{
    return this.http.get(this.host+"/analyses/getAllAnalyses?motCle="+motCle+"&page="+page).pipe(
      map( (res:any) =>{
        this.aboutAnalyses=res;
        this.analyses=res.content;
        return res.content
      }
    )
    )
  }

  public getAnalysesByCat(idCat:string,motCle?:string,page?:number) : Observable<Analyse[]>{
    return this.http.get(this.host+"/analyses/getAnalysesByClient/"+idCat+"?motCle="+motCle+"&page="+page).pipe(
      map( (res:any) =>{
          this.aboutAnalyses=res;
          this.analyses=res.content;
          return res.content
        }
      )
    )
  }

  public getClients(motCle?:string,page?:number): Observable<Client[]>{

    if(motCle==undefined){
      return this.http.get(this.host+"/clients/getAllClients").pipe(
        map((res:any)=>{
          this.listClients=res;
          return res
        })
      )
    }
    else{
      return this.http.get(this.host+"/clients/getAllClients?motCle="+motCle+"&page="+page).pipe(
        map((res:any)=>{
          this.aboutClients=res;
          this.clients=res.content;
          return res.content
        })
      )
    }


  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DataCat> | Promise<DataCat> | DataCat {
    return new DataCat(this.analyses);
  }


}

