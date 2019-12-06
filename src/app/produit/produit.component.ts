import { Component, OnInit } from '@angular/core';
import{Produit} from '../shared/produit';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import{Observable} from 'rxjs';
import { PdtService } from '../pdt.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

produitForm:FormGroup;
operation:string="add";
selectedP:Produit; 
Produits: Produit[];


  constructor( private pdtservice:PdtService ,private fb:FormBuilder) { 
    
    this.createForm();
  }

  ngOnInit() {
    this.Produits=this.pdtservice.getProduits();
    this.initProduit();
  }
// creer le form
createForm(){
  this.produitForm=this.fb.group({
    ref:['',Validators.required], //obligatoire
    qte:'',
    prixU:''
    });
}

//PdtService
ajouter(){
  this.pdtservice.addProduit(this.selectedP);
} 
updatep(){
  this.pdtservice.updatep(this.selectedP);
}
delete(){
 this.pdtservice.deletep(this.selectedP.ref);
}

  initProduit(){
    this.createForm();
  }


 
}
