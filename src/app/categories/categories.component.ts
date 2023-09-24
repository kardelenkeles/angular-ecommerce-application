import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductSelector} from "../state/selector/product.selector";
import {Observable} from "rxjs";
import {Product} from "../state/model/product";
import {Router} from "@angular/router";
import {GetAllProducts} from "../state/action/product.action";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Select(ProductSelector.getProducts)
  products$: Observable<Product[]>;
  products: Product[];
  categories: any[] = [];
  uniquesCategories: any[] = [];

  constructor(private store: Store,
              private router: Router
  ) {
  }

  ngOnInit(): void {

    this.products$.subscribe((data) => {
        this.products = data;
        this.categories = this.products.map((item) => {
            item.category;
            if (!this.uniquesCategories.includes(item.category)) {
              this.uniquesCategories.push(item.category);
            }
          }
        );
        console.log(this.categories)
        console.log(this.uniquesCategories)
      }
    )
  }
}
