import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/months';

  constructor(private http: HttpClient) { }

  getMonth(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMonth(month: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, month);
  }

  updateMonth(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMonth(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMonthsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
