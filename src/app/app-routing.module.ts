import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'view-product', component: ViewProductComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
