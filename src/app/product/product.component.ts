import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductSelector} from "../state/selector/product.selector";
import {Observable} from "rxjs";
import {Product} from "../state/model/product";
import {Router} from "@angular/router";
import { GetAllProducts} from "../state/action/product.action";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
    @Select(ProductSelector.getProducts)
    products$: Observable<Product[]>;

    products: Product[] = [];

    constructor(private store: Store,
                private router: Router
    ) {
    }

    ngOnInit(): void {
        this.store.dispatch(new GetAllProducts());
        this.products$.subscribe((data) => (this.products = data));
    }


}
