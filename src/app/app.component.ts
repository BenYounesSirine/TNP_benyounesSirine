import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
showHideSideBar:boolean=false; //pour que le sidebar soit caché par defaut

onshowSideBarChange(showHideSideBar){
this.showHideSideBar=showHideSideBar;
  }
  title = 'gestion';
}
