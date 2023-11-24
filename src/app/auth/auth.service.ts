import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/auth/register', data);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/auth/login', {username, password});
  }



}
