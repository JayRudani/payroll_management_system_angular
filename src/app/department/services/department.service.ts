import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = 'http://127.0.0.1:8080/api/v1/departments';

  constructor(private http: HttpClient) { }

  getDepartment(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDepartment(department: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, department);
  }

  updateDepartment(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDepartmentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
