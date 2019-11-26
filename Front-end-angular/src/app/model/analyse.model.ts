import { Client} from "./client.model";

export class Analyse{

  constructor(


  public id?:String,
  public nom?:string,
  public prix?:number,
  public resultat?:string,
  public isResConnu?:boolean,
  public client?:Client,


  ){

  }

}
