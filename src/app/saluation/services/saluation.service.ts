import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaluationService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/saluations';

  constructor(private http: HttpClient) { }

  getSaluation(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSaluation(saluation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, saluation);
  }

  updateSaluation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSaluation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSaluationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
