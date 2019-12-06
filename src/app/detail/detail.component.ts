import { Component, OnInit } from '@angular/core';

import { PdtService } from '../pdt.service';
import { Produit } from '../shared/produit';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  Produits: Produit[];
  ref:String;
  prixU:String;
 

  constructor( private service:PdtService) { }

  search(){
    this.Produits=this.Produits.filter(res=>{
      return res.ref.toLocaleLowerCase().match(this.ref.toLocaleLowerCase()
      );
    });
  }
  
  searchp(){
    this.Produits=this.Produits.filter(res=>{
      return res.prixU.toLocaleString().match(this.prixU.toString());
    });
  }

  ngOnInit() {
    this.Produits=this.service.getProduits();
  }
}
