import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/province';

  constructor(private http: HttpClient) { }

  getProvince(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProvince(province: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, province);
  }

  updateProvince(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProvince(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProvincesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
