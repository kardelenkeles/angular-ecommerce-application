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
import {FormsModule} from "@angular/forms";
import {ProductCrudComponent} from './product/product-crud/product-crud.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    NavbarComponent,
    ProductCrudComponent,
    ProductDetailComponent,


  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    RouterLink,
    NgxsModule.forRoot([ProductState]),
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
