import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/countries';

  constructor(private http: HttpClient) { }

  getCountry(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCountry(country: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, country);
  }

  updateCountry(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCountriesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
