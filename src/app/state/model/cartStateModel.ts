import {Cart} from "./cart";


export interface CartStateModel{
  cart: Cart[];
  oneCart: Partial<Cart>;
}
