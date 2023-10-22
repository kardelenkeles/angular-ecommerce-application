import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GetCart, RemoveProductFromCart} from "../state/action/cart.action";
import {Observable} from "rxjs";
import {CartSelector} from "../state/selector/cart.selector";
import {Cart} from "../state/model/cart";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../state/model/product";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Select(CartSelector.getACart)
  activeCart$: Observable<Cart>;
  activeCart: Cart;

  constructor(private store: Store,
              private route: ActivatedRoute,
              private router: Router
  ) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.store.dispatch(new GetCart(id))

    this.activeCart$.subscribe((data) => {
      this.activeCart = data;
      console.log('data in component', this.activeCart);
    })
  }

  getProduct(id: number) {
    this.router.navigate(['/products', id]).then();
  }

  removeProductFromCart(productId: number ) {
    console.log('remove product from cart', productId)
    this.store.dispatch(new RemoveProductFromCart(productId));
  }

}
