import {Component, EventEmitter, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductSelector} from "../state/selector/product.selector";
import {Observable} from "rxjs";
import {Product} from "../state/model/product";
import {Router} from "@angular/router";
import {DeleteProduct, GetAllProducts, GetOneProduct, UpdateProduct} from "../state/action/product.action";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Select(ProductSelector.getProducts)
  products$: Observable<Product[]>;

  products: Product[] = [];
  categories: any[] = [];
  uniqueCategories: any[] = [];
  filteredProducts: any[] = [];

  currentCategory: string | null = null;


  constructor(private store: Store,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllProducts(''));

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

  // getItemsByCategory(category: string) {
  //   this.currentCategory = category;
  //   this.filteredProducts = this.products.filter(item => item.category === category)
  //   console.log(this.filteredProducts)
  // }

  filterProductsByCategory(category: string){
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


}
