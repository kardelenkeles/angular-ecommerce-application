import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product, UpdateProduct} from "../state/model/product";
import {environment} from "../environments/environment";
import {Cart, UpdateCart} from "../state/model/cart";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {
  }

  getCart(id: number) {
    return this.http.get<Cart>(environment.apiUrl + `/card/${id}`);
  }

  createCart(payload: Cart) {
    return this.http.post<Cart>(environment.apiUrl + `/card`, payload);
  }

  updateCart(cardId: number, productId: number) {
    return this.http.put(environment.apiUrl + `/card/${cardId}/${productId}`, { cardId, productId });
  }

  removeProductFromCart(id: number, productId: number) {
    return this.http.delete(environment.apiUrl + `/card/${id}/${productId}`);
  }


}
