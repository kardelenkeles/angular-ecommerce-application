import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {CreateProduct} from "../action/product.action";
import {tap} from "rxjs";
import {CartStateModel} from "../model/cartStateModel";
import {CartService} from "../../service/cart.service";
import {CreateCart, GetCart, RemoveProductFromCart, UpdateCart} from "../action/cart.action";
import {patch} from "@ngxs/store/operators";
import {Cart} from "../model/cart";


@State<CartStateModel>({
    name: 'card',
    defaults: {
        cart: {
            id: 0,
            total: 0,
            quantity: 0,
            productIds: [],
            cardProduct: []
        },
        oneCart: {}
    },
})
@Injectable()
export class CartState {

    constructor(private cartService: CartService) {
    }

    @Action(GetCart)
    getCart({patchState}: StateContext<CartStateModel>, {id}: GetCart) {
        return this.cartService.getCart(id).pipe(
            tap((data) => {
                console.log(':incomin darta', data);
                patchState({
                    oneCart: data
                })
            })
        );
    }

    @Action(CreateCart)
    createCart({getState, patchState}: StateContext<CartStateModel>, {payload}: CreateCart,
    ) {
        return this.cartService.createCart(payload).pipe(
            tap((result: any) => {
                patchState({
                    cart: result,
                });
            }),
        );
    }


    // @Action(UpdateCart)
    // addToCart({patchState}: StateContext<CartStateModel>, {productId, cardId}: UpdateCart) {
    //     return this.cartService.updateCart(cardId).pipe(
    //         tap((result: any) => {
    //             console.log('result', result)
    //             patchState({
    //                 cart: result,
    //             });
    //         }
    //
    // }


    // @Action(RemoveProductFromCart)
    // removeProductFromCart({ getState, patchState }: StateContext<CartStateModel>, { productId }: RemoveProductFromCart) {
    //     return this.cartService.removeProductFromCart(productId).pipe(
    //         tap(() => {
    //             const state = getState();
    //             const filteredCart = state.cart.filter((product) => product.id !== productId);
    //             patchState({
    //                 cart: filteredCart,
    //             });
    //         }),
    //     );
    //
    // }

}
