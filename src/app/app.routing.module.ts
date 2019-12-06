//la configuration des routes

import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { from } from 'rxjs';


export const routes:Routes=[
    /*definir chemins vers les composants*/ 
{path:'produit',component:ProduitComponent},
{path:'dashboard',component:DashboardComponent},
{path:'dashboard/:ref',component:DetailComponent},
//{path:'dashboard/detail',component:DetailComponent},
//path par defaut
{path: '',redirectTo: 'dashboard',pathMatch:'full'}
//{path:'**', component:ErrorComponent}


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{

}