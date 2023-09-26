import {Selector} from "@ngxs/store";
import {ProductState} from "../state/product.state";
import {ProductStateModel} from "../model/productStateModel";
import {CartState} from "../state/cart.state";
import {CartStateModel} from "../model/cartStateModel";

export class CartSelector {
    @Selector([CartState])
    static getCart(state: CartStateModel) {
        return state.cart;
    }

    @Selector([CartState])
    static getACart(state: CartStateModel) {
        return state.oneCart;
    }
}
