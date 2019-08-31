import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { ViewProductComponent } from './view-product/view-product.component';
import { PanierComponent } from './panier/panier.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { LoginComponent } from './admin/login/login.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AritcleComponent } from './admin/aritcle/aritcle.component';


const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'view-product', component: ViewProductComponent },
  { path: 'client', component: ClientComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'addarticles', component: AritcleComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
