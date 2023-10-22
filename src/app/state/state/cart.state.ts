import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {CreateProduct} from "../action/product.action";
import {tap} from "rxjs";
import {CartStateModel} from "../model/cartStateModel";
import {CartService} from "../../service/cart.service";
import {CreateCart, GetCart, RemoveProductFromCart, UpdateCart} from "../action/cart.action";
import {patch} from "@ngxs/store/operators";


@State<CartStateModel>({
    name: 'card',
    defaults: {
        cart: [],
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

    @Action(UpdateCart)
    updateCart({getState, patchState}: StateContext<CartStateModel>, action: UpdateCart) {

        this.cartService.updateCart(1, action.payload).subscribe((data) => {
            patchState({
                oneCart: data as any
            });
        });

        console.log(action.payload)
        //
        // this.cartService.updateCart(action.payload).pipe(
        //     tap(() => {
        //         const state = getState();
        //         console.log(state)
        //         const currentCart = state.cart;
        //         const updatedCart = {
        //             ...currentCart,
        //             action
        //         }
        //         patchState({
        //             cart: updatedCart
        //         })
        //     })
        // )
        // const productCart = [...state.cart];
        // if (!productCart.some(p => p.id === payload.id)) {
        //     productCart.push(payload);
        // }
        //
        // return productCart;


    }


    @Action(RemoveProductFromCart)
    removeProductFromCart({ getState, patchState }: StateContext<CartStateModel>, { productId }: RemoveProductFromCart) {
        return this.cartService.removeProductFromCart(productId).pipe(
            tap(() => {
                const state = getState();
                const filteredCart = state.cart.filter((product) => product.id !== productId);
                patchState({
                    cart: filteredCart,
                });
            }),
        );

    }

}
