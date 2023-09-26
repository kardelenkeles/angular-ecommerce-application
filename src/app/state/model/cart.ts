import {Product} from "./product";

export interface Cart {

    id: number;

    total: number;

    quantity: number;

    productIds?: number[];
    cardProduct: CartProduct[];
}

export interface CartProduct {
    productId: number,
    cardId: number,
    product: Product,
}

export interface UpdateCart {

    id?: number;

    total?: number;

    quantity?: number;

    productIds?: number[];

}
