import { Component } from '@angular/core';
import {Product} from "../../state/model/product";
import {Select, Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {CreateProduct} from "../../state/action/product.action";
import {ProductSelector} from "../../state/selector/product.selector";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  // @Select(ProductSelector.getProducts)
  // products: Product[] = [];
  // newProductName: string;
  // newDetails: string;
  // newPrice: number;
  // newDiscount: number;
  // newId: number;
  //
  // constructor(private store: Store,
  //             private router: Router
  // ) {
  // }
  //
  // createProduct() {
  //   this.store.dispatch(new CreateProduct({
  //     productName: this.newProductName,
  //     details: this.newDetails,
  //     price: this.newPrice,
  //     discount: this.newDiscount,
  //     id: this.newId
  //   }))
  //
  // }
}
