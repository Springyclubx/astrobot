import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../../model/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  constructor(private vHttp: HttpClient) { }

  private apiUrl = 'http://localhost:8080/Department';

  findAll(): Observable<Department[]> {
    return this.vHttp.get<Department[]>(this.apiUrl);
  }

  findById(departmentId: number): Observable<Department> {
    return this.vHttp.get<Department>(this.apiUrl + departmentId);
  }

  post(department: Department): Observable<Department> {
    return this.vHttp.post<Department>(this.apiUrl, department);
  }

  put(department: Department): Observable<Department> {
    return this.vHttp.put<Department>(this.apiUrl + department.id, department);
  }

  delete(departmentId: number): Observable<Department> {
    return this.vHttp.delete<Department>(this.apiUrl + departmentId);
  }
}