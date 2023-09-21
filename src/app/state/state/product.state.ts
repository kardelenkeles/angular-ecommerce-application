import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ProductStateModel} from "../model/productStateModel";
import {ProductService} from "../../service/product.service";
import {CreateProduct} from "../action/product.action";
import {tap} from "rxjs";

@State<ProductStateModel>({
    name: 'products',
    defaults: {
        products: [

        ],
    },
})
@Injectable()
export class ProductState {

    constructor(productService: ProductService) {}

    @Selector()
    static getProducts(state: ProductStateModel) {
        return state.products;
    }

    @Action(CreateProduct)
    createProduct(
        {getState, patchState}: StateContext<ProductStateModel>, {payload}: CreateProduct,
    ) {
        return this.productService.createProduct(payload).pipe(
            tap((result: any) => {
                const state = getState();
                patchState({
                    products: [...state.products, result],
                });
            }),
        );
    }

}
