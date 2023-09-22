import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {ProductStateModel} from "../model/productStateModel";
import {ProductService} from "../../service/product.service";
import {CreateProduct, DeleteProduct, GetAllProducts, GetOneProduct, UpdateProduct} from "../action/product.action";
import {tap} from "rxjs";
import {Product} from "../model/product";

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: [],
  },
})
@Injectable()
export class ProductState {

  constructor(private productService: ProductService) {
  }


  @Action(CreateProduct)
  createProduct({getState, patchState}: StateContext<ProductStateModel>, {payload}: CreateProduct,
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

  @Action(GetOneProduct)
  getOneProduct({getState, setState}: StateContext<ProductStateModel>, {id} : GetOneProduct){
      return this.productService.getProduct(id).pipe(
          tap((res: Product) => {
              const state = getState();
              const foundProduct = state.products.filter((product) => product.id !== id);
              setState({
                  ...state,
                  products: foundProduct,
              });
          }),
      );
  }

  @Action(GetAllProducts)
  getAllTasks({ patchState }: StateContext<ProductStateModel>) {
    return this.productService.getALlProducts().pipe(
      tap((result: any) => {
        patchState({
          products: result,
        });
      }),
    );
  }

  @Action(DeleteProduct)
  deleteTask({ getState, setState }: StateContext<ProductStateModel>, { id }: DeleteProduct,
  ) {
    return this.productService.deleteProduct(id).pipe(
      tap((res: Product) => {
        const state = getState();
        const filteredProducts = state.products.filter((product) => product.id !== id);
        setState({
          ...state,
          products: filteredProducts,
        });
      }),
    );
  }

  @Action(UpdateProduct)
  updateTask({}: StateContext<ProductStateModel>, action: UpdateProduct) {
    return this.productService.updateProduct(action.id, action.payload);
  }

}
