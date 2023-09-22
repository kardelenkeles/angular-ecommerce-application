import { Component } from '@angular/core';
import {ProductSelector} from "../../state/selector/product.selector";
import {Select, Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {CreateProduct} from "../../state/action/product.action";

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {

  newProductName: string;
  newDetails: string;
  newPrice: number;
  newDiscount: number;
  newCategory: string;
  newId: number;

  constructor(private store: Store,
              private router: Router
  ) {
  }

  createProduct() {
    this.store.dispatch(new CreateProduct({
      productName: this.newProductName,
      details: this.newDetails,
      price: this.newPrice,
      category: this.newCategory,
      discount: this.newDiscount,
      id: this.newId
    }))

  }

}