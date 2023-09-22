import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {HomeComponent} from "./home/home.component";
import {ProductCrudComponent} from "./product/product-crud/product-crud.component";
import {AProductComponent} from "./product/a-product/a-product.component";




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent},
  { path: 'create-product', component: ProductCrudComponent},
  { path: 'products/:id', component: AProductComponent},


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
