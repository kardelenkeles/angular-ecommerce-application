import {Product} from "../model/product";

export class CreateProduct {
    static readonly type = '[Product] Create Product';

    constructor(public payload: Product) {}
}

export class GetAllProducts {
    static readonly type = '[Product] Get All Products';
}

export class GetOneProduct {
    static readonly type = '[Product] Get One Product';
}

export class DeleteProduct {
    static readonly type = '[Product] Delete Product';

    constructor(public id:number) {}
}

export class UpdateProduct {
    static readonly type = '[Product] Update Product';

    constructor(public id: number,
                public payload: Product
    ) {}
}
