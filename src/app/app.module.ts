import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app.routing.module';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { PdtService } from './pdt.service';
import { DetailComponent } from './detail/detail.component';
import {RouterModule} from '@angular/router';
import { CheckmarckPipe } from './checkmarck.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    DetailComponent,
   CheckmarckPipe
  
  ],
  imports: [
    BrowserModule,AppRoutingModule,ReactiveFormsModule, FormsModule,RouterModule
  ],
  providers: [PdtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
