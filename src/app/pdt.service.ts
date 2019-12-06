import { Injectable } from '@angular/core';
import { Produit } from './shared/produit';

@Injectable({
  providedIn: 'root'
})
export class PdtService {
  [x: string]: any;
  Produits=[
    new Produit ('Boite Chocolat',50,46.9,"../assets/boite.jpg",true),
    new Produit ('Tablette Chocolat',50,20.5,"../assets/tablette.jpg",true),
    new Produit ('Chocolat fourré',50,59.9,"../assets/fourre.jpg",true),
    new Produit ('Chocolat Noir',50,40.5,"../assets/noir.jpg",true),
    new Produit ('Celecbration Choclate',50,159.9,"../assets/event.jpg",false),
    new Produit ('Chocolat Blanc',50,33.5,"../assets/blanc.jpg",false),
    new Produit ('Gourmandise',50,90.9,"../assets/gourmand.jpg",true),
    new Produit ('Chocolat BIO',50,129.9,"../assets/bio.jpg",true),
    new Produit ('Bouquet Chocolat',50,85.9,"../assets/bouquet.jpg",false)
   ];
  constructor() { }
  
public getProduits():Produit[]{return this.Produits;}

addProduit(p:Produit){
return this.Produits.push(p);  

}

updatep(p:Produit){
return this.Produits;
}


deletep(ref:String){
  for(let i = 0; i < this.Produits.length; i++){
    if(this.Produits[i].ref==ref){
       return this.Produits.splice(i,1);
       break;
    }
    }
}
}
