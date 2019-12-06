import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/produit';
import { PdtService } from '../pdt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Produits: Produit[];
 ddebut= new Date("2019-12-10");
 dfin= new Date("2020-1-1");

  constructor(private pdtservice:PdtService) { 
    
  }

  ngOnInit() {
    this.Produits=this.pdtservice.getProduits();
    

  }
 

}
