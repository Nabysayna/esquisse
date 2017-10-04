  import { Component, OnInit } from '@angular/core';
  import { OrangeMoneyService } from '../webServiceClients/Orangemoney/orangemoney.service' ;

@Component({
  selector: 'app-orange-money-component',
  templateUrl: './orange-money-component.component.html',
  styleUrls: ['./orange-money-component.component.css']
})
export class OrangeMoneyComponentComponent implements OnInit {

  numclient :  number ;
  mnt : number ;
  services = ['Sonatel', 'Orange Teranga', 'Energie Renouvelable', 'Senelec et Woyofal', 'Canal+', 'SDE', 'Education', 'Transport Rapido', 'Paiements Internet', 'Assurances'] ; 
  choosenService = 'Choisir un service' ;

  loading = false ;


  constructor(private omService : OrangeMoneyService) { 
  }

  ngOnInit() { }

/*******************************************************/
  transferer(zonetransfert){
  	if (zonetransfert=='national'){ 
      let requete = "3/"+this.numclient+"/"+this.mnt ;
      this.loading = true ;
      this.omService.requerirControllerOM(requete).then( resp => {
        if (resp.status==200){
          if (resp._body=='1'){
            this.loading = false ;
            this.numclient = undefined ;
            this.mnt = undefined; 
          }
        }
        else
          console.log("error") ; 
      }) ;
    } 
    if (zonetransfert=='international'){ 
      let requete = "4/"+this.numclient+"/"+this.mnt ;
      this.loading = true ;
      this.omService.requerirControllerOM(requete).then( resp => {
        if (resp.status==200){
          if (resp._body=='1'){
            this.loading = false ;
            this.numclient = undefined ;
            this.mnt = undefined; 
          }
        }
        else
          console.log("error") ; 
      }) ;
    } 

  }

/********************************************************/
  deposer(){
    let requete = "1/"+this.numclient+"/"+this.mnt ;
    this.loading = true ;
    this.omService.requerirControllerOM(requete).then( resp => {
      if (resp.status==200){
        if (resp._body=='1'){
          this.loading = false ;
          this.numclient = undefined ;
          this.mnt = undefined; 
        }
      }
      else
        console.log("error") ; 
    }) ;
  }

/*********************************************************/

  retirer(){
    let requete = "2/"+this.numclient+"/"+this.mnt ;
    this.loading = true ;
    this.omService.requerirControllerOM(requete).then( resp => {
      if (resp.status==200){
        if (resp._body=='1'){
          this.loading = false ;
          this.numclient = undefined ;
          this.mnt = undefined; 
        }
      }
      else
        console.log("error") ; 
    }) ;
  }

/*********************************************************/

  payerFacture(){
    let requete = "5/"+this.numclient+"/"+this.mnt ;
    this.loading = true ;
    this.omService.requerirControllerOM(requete).then( resp => {
      if (resp.status==200){
        if (resp._body=='1'){
          this.loading = false ;
          this.numclient = undefined ;
          this.mnt = undefined; 
        }
      }
      else
        console.log("error") ; 
    }) ;
  }

/*********************************************************/

  acheterCredit(){
    let requete = "6/"+this.numclient+"/"+this.mnt ;
    this.loading = true ;
    this.omService.requerirControllerOM(requete).then( resp => {
      if (resp.status==200){
        if (resp._body=='1'){
          this.loading = false ;
          this.numclient = undefined ;
          this.mnt = undefined; 
        }
      }
      else
        console.log("error") ; 
    }) ;
  }


}

