import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/v1/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/login';
  constructor(private http: HttpClient) { }

  // login(credentials): Observable<any> {
  //   return this.http.post(AUTH_API + 'login', {
  //     login_email: credentials.username,
  //     login_password: credentials.password
  //   }, httpOptions);
  // }

  login(login: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, login);
  }
}
