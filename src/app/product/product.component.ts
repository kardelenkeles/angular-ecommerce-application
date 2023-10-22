import {Component, EventEmitter, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductSelector} from "../state/selector/product.selector";
import {Observable} from "rxjs";
import {Product} from "../state/model/product";
import {Router} from "@angular/router";
import {DeleteProduct, GetAllProducts} from "../state/action/product.action";
import {GetCart, UpdateCart} from "../state/action/cart.action";
import {Cart} from "../state/model/cart";
import {CartSelector} from "../state/selector/cart.selector";
import {dateComparator} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Select(ProductSelector.getProducts)
  @Select(CartSelector.getCart)
  products$: Observable<Product[]>;
  cart$: Observable<Cart[]>;


  products: Product[] = [];
  categories: any[] = [];
  uniqueCategories: any[] = [];
  cart: Cart[];

  constructor(private store: Store,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllProducts(''));
    this.store.dispatch(new GetCart(10));

    this.products$.subscribe((data) => {
        this.products = data;
        this.categories = this.products.map((item) => {
            item.category;
            if (!this.uniqueCategories.includes(item.category)) {
              this.uniqueCategories.push(item.category);
            }
            return item.category;
          }
        );
        console.log(this.categories)
        console.log(this.uniqueCategories)
      }
    )

  }

  filterProductsByCategory(category: string) {
    this.store.dispatch(new GetAllProducts(category));
  }


  deleteProduct(id: number) {
    if (confirm('Do you want to delete this task?')) {
      this.store.dispatch(new DeleteProduct(id));
    }
  }

  getProduct(id: number) {
    this.router.navigate(['/products', id]).then();
  }


  addToCard(product: any) {
    const cart = this.store.selectSnapshot(CartSelector.getACart);

    const productIds: number[] | undefined = cart.cardProduct?.map(item => item.productId);
    productIds?.push(product.id);
    this.store.dispatch(new UpdateCart({
      productIds: productIds
    }))
  }
}
