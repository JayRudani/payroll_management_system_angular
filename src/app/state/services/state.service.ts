import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/states';

  constructor(private http: HttpClient) { }

  getState(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createState(state: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, state);
  }

  updateState(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteState(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStatesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
