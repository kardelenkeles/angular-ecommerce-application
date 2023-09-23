import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import { ProductSelector} from "../../state/selector/product.selector";
import {Observable} from "rxjs";
import {Product} from "../../state/model/product";
import {DeleteProduct, GetAllProducts, GetOneProduct} from "../../state/action/product.action";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductComponent} from "../product.component";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Select(ProductSelector.getProductDetail)
  productDetail$: Observable<Product>;
  productDetail: Product;
  constructor(private store: Store,
              private route: ActivatedRoute) {
  }

  goAndAddCard() {

  }

  deleteProduct(id: number) {
    if (confirm('Do you want to delete this task?')) {
      this.store.dispatch(new DeleteProduct(id));
    }
  }


  ngOnInit(): void {
     const id = this.route.snapshot.params['id']
     this.store.dispatch(new GetOneProduct(id))

    this.productDetail$.subscribe((productDetail) => {
      console.log('productDetail',productDetail)
      this.productDetail = productDetail
    })
  }


}
