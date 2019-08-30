import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { PanierComponent } from './panier/panier.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { MenuLeftAdminComponent } from './admin/menu-left-admin/menu-left-admin.component';
import { LoginComponent } from './admin/login/login.component';
import { CategoriesComponent } from './admin/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    MenuComponent,
    FooterComponent,
    ViewProductComponent,
    PanierComponent,
    ClientComponent,
    CommandeComponent,
    MenuAdminComponent,
    MenuLeftAdminComponent,
    LoginComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
