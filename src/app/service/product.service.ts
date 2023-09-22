import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../state/model/product";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(id: string) {
    return this.http.get<Product[]>(`http://localhost:4200/api/tasks/${id}`);
  }
  getALlProducts() {
    return this.http.get<Product[]>(`http://localhost:4200/api/tasks`);
  }

  createProduct(payload: Product) {
    return this.http.post<Product>(`http://localhost:4200/api/tasks`, payload);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`http://localhost:4200/api/tasks/${id}`);
  }

  updateProduct(id: number, payload:Product) {

  }
}
