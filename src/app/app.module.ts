import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from './navbar/navbar.component';
import {NgxsModule} from "@ngxs/store";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {ProductState} from "./state/state/product.state";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductCrudComponent} from './product/product-crud/product-crud.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {CartState} from "./state/state/cart.state";
import {LoginComponent} from "./auth/login/login.component";
import {UserState} from "./auth/state/state/user.state";
import {RegisterComponent} from "./auth/register/register.component";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    NavbarComponent,
    ProductCrudComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    LoginComponent,
    RegisterComponent


  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    RouterLink,
    NgxsModule.forRoot([ProductState, CartState, UserState]),
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
