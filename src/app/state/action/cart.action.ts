import {Cart} from "../model/cart";
import {Product} from "../model/product";

export class CreateCart {
  static readonly type = '[Cart] Create Cart';

  constructor(public payload: Cart) {
  }
}

export class GetCart {

  static readonly type = '[Cart] Get Cart';

  constructor(public id: number) {
  }
}


export class UpdateCart {
  static readonly type = '[Cart] Add To Cart';
  constructor(public productId: number,
              public cardId: number
             ) {}
}

export class RemoveProductFromCart {

  static readonly type = '[Cart] Remove Product From Cart';

  constructor(
    public productId: number
  ) {
  }
}

