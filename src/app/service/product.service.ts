import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product, UpdateProduct} from "../state/model/product";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(id: string) {
    return this.http.get<Product[]>(environment.apiUrl + `api/products/${id}`);
  }
  getALlProducts() {
    return this.http.get<Product[]>(environment.apiUrl + `api/products`);
  }

  createProduct(payload: Product) {
    return this.http.post<Product>(environment.apiUrl + `api/products`, payload);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(environment.apiUrl + `api/products/${id}`);
  }

  updateProduct(id: number, productBody:UpdateProduct) {
    return this.http.put(environment.apiUrl + `api/tasks/${id}`, productBody);
  }
}
