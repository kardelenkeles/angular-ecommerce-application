import {Selector} from "@ngxs/store";
import {ProductStateModel} from "../model/productStateModel";
import {ProductState} from "../state/product.state";

export class ProductSelector {
    @Selector([ProductState])
    static getProducts(state: ProductStateModel) {
        return state.products;
    }

    @Selector([ProductState])
    static getProductDetail(state: ProductStateModel) {
        return state.productDetail;
    }
}
