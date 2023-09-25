import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product, UpdateProduct} from "../state/model/product";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(id: number) {
    return this.http.get<Product>(environment.apiUrl + `/products/${id}`);
  }
  getALlProducts(category?: string) {
    const params = new HttpParams().set('category', category || '');
    const url = `${environment.apiUrl}/products`;
    return this.http.get<Product[]>(url, {params});
  }

  createProduct(payload: Product) {
    return this.http.post<Product>(environment.apiUrl + `/products`, payload);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(environment.apiUrl + `/products/${id}`);
  }

  updateProduct(id: number, productBody:UpdateProduct) {
    return this.http.put(environment.apiUrl + `/tasks/${id}`, productBody);
  }
}
