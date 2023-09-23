import {Product} from "./product";

export interface ProductStateModel{
  products: Product[];
  productDetail?:  Product;
}
