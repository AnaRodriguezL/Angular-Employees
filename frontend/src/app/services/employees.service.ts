import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
    providedIn: 'root'
})

export class EmployeesService {

    private readonly endpoint = 'employees';
    private baseUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.baseUrl}/${this.endpoint}`);
    }

    getEmployee(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.baseUrl}/${this.endpoint}/edit/${id}`);
    }

    // editEmployee(id: number, data: Partial<Employee>): Observable<Employee> {
    //     return this.http.put<Employee>(`${this.baseUrl}/${this.endpoint}/${id}`, data);
    // }

    addEmployee(data: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.baseUrl}/${this.endpoint}`, data);
    }

    deleteEmployee(id: number): Observable<Employee> {
        return this.http.delete<Employee>(`${this.baseUrl}/${this.endpoint}/${id}`);
    }
}

