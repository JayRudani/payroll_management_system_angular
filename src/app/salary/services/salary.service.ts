import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salary } from '../services/salary';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/salaries';

  constructor(private http: HttpClient) { }

  getSalary(id: number): Observable<Salary> {
    return this.http.get<Salary>(`${this.baseUrl}/${id}`);
  }

  createSalary(salary: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, salary);
  }

  updateSalary(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSalary(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSalariesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all-salaries`);
  }
}
