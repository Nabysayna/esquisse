
import {Injectable} from '@angular/core';
import {SoapService} from "../../soap.service";

export class TntResponse{
  id_abonnement: number ;
  prenom: string ;
  nom: string ;
  tel: string ;
  adresse: string ;
  region: string ;
  city: string ;
  ncni: string ;
  n_chip : string ;
  n_carte : string ;
  date_abonnement: string ;
  duree : string ;
  id_typeabonnement : string ;
  montant : number ;
  id_operateur : number;
  etat : number ;
  id_activateur: number ;
  date_activation: string;
  etat_reclamation : string;
  datefinactivation : string ;
}


@Injectable()
export class TntServiceWeb {

  private servicePort:string = 'http://localhost' ; 
  private servicePath:string = '/EsquisseBackEnd/web/app_dev.php/invest/tnt?wsdl' ;
  private targetNamespace:string = 'urn:tntwsdl' ;

  public responseJso : any ;
  public resp : string ;
  public responseJsoFWS : TntResponse[] ;  

  private soapService:SoapService;
  
  constructor() {
        this.soapService = new SoapService(this.servicePort, this.servicePath, this.targetNamespace);
        this.soapService.envelopeBuilder = this.envelopeBuilder;
        this.soapService.jsoResponseHandler = (response:{}) => { this.responseJso =response ; };
        this.soapService.localNameMode = true;
  }


  public listAbonnement(token : string) : Promise<TntResponse[]> {

      var method:string = 'listabonnement'; 
      var parameters:{}[] = []; 

      var reEspParams = {token:token} ;
      var params:{}[] = [] ; 
      params["params"] = reEspParams ;

      return new Promise( (resolve, reject) => {
        parameters['listabonnement xmlns="urn:tntwsdl#"'] = params ;

        this.soapService.post(method, parameters, 'listabonnementResponse').then(response=>{
          this.responseJsoFWS = JSON.parse(response['listabonnementResponse'].return.$);
          //console.log("reponse brute from class attribute "+JSON.stringify(this.responseJsoFWS[0]) ) ;
          resolve(this.responseJsoFWS) ;
        }); 
      });      
  }

  public checkNumber(token : string, chipOrCardNum: string) : Promise<TntResponse> {

      var method:string = 'verifinumeroabonnement'; 
      var parameters:{}[] = []; 

      var reEspParams = {token:token, numeroCarteChip:chipOrCardNum} ;
      var params:{}[] = [] ; 
      params["params"] = reEspParams ;

      return new Promise( (resolve, reject) => {
        parameters['verifinumeroabonnement xmlns="urn:tntwsdl#"'] = params ;

        this.soapService.post(method, parameters, 'verifinumeroabonnementResponse').then(response=>{
          this.responseJsoFWS = JSON.parse(response['verifinumeroabonnementResponse'].return.$);
          //console.log("reponse brute from class attribute "+JSON.stringify(this.responseJsoFWS) ) ;
          resolve(this.responseJsoFWS) ;
        }); 
      });      
  }


  public abonner(token:string, prenom:string, nom:string, tel:string, adresse:string, region:string, city:string, cni:string, numerochip:string, numerocarte:string, duree:number, typedebouquet:number) : Promise<string> {

      var method:string = 'ajoutabonnement'; 
      var parameters:{}[] = []; 

      var reEspParams = {token:token, prenom:prenom, nom:nom, tel:tel, adresse:adresse, region:region, city:city, cni:cni, numerochip:numerochip, numerocarte:numerocarte, duree:duree, typedebouquet:typedebouquet} ;
      var params:{}[] = [] ; 
      params["params"] = reEspParams ;

      console.log("Parameters : "+JSON.stringify(params["params"])) ;
      return new Promise( (resolve, reject) => {
        parameters['ajoutabonnement xmlns="urn:tntwsdl#"'] = params ;
        this.soapService.post(method, parameters, 'ajoutabonnementResponse').then(response=>{
          var reponse : string = JSON.parse(response['ajoutabonnementResponse'].return.$).response;
          //console.log("reponse brute  "+reponse ) ;
          resolve(reponse) ;
        }); 
      });      
  }


  private envelopeBuilder(requestBody:string):string {
      return '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'+requestBody+'</soap:Body></soap:Envelope>' ;
  }

}