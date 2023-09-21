import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }