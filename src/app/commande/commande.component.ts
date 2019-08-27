import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  isClient = true;
  isCommande = false;
  isMesure = false;

  constructor() { }

  ngOnInit() {
  }
  // formlaire
  // methode pour afficher le deuxieme formulaire
  afficherf1(){
    this.isClient = false;
    this.isCommande  =true;
    this.isMesure = false;
  }
  afficherf2(){
    this.isClient = false;
    this.isCommande  =false;
    this.isMesure = true;
  }

}
