import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //directive input pour passer la valeur (showhidesidebar(app:parent) au nav:fils)
  @Input()showSideBar:boolean; 
  //puisque le parent (app) et l'enfant (nav) sont 2 comonents diffrent ,il faut propager l'inf(true or false)
  //permet de mettre a jour la valeur du INPUT
  @Output()showSideBarChange:EventEmitter<boolean>=new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }
 afficherSideBar(){
   //le changement du valeur boolean pour hide/side 
      this.showSideBar = !this.showSideBar;
  //propager l'information this.showsidebar 
      this.showSideBarChange.emit(this.showSideBar);}

     

}
