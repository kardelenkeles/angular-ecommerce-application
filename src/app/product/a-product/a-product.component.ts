import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductSelector} from "../../state/selector/product.selector";
import {Observable} from "rxjs";
import {Product} from "../../state/model/product";
import {DeleteProduct} from "../../state/action/product.action";

@Component({
  selector: 'app-a-product',
  templateUrl: './a-product.component.html',
  styleUrls: ['./a-product.component.css']
})
export class AProductComponent implements OnInit{
  @Select(ProductSelector.getProducts)
  products$: Observable<Product[]>;

  products: Product[] = [];
  constructor(private store: Store) {
  }

  goAndAddCard() {

  }
  deleteProduct(id: number) {
    if (confirm('Do you want to delete this task?')) {
      this.store.dispatch(new DeleteProduct(id));
    }
  }

  ngOnInit(): void {

  }

}
