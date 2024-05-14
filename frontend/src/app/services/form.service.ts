import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from '../models/employee.model';

@Injectable({
    providedIn: 'root'
})

export class FormServices {

    private readonly endpoint = 'form';
    private baseUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    /**
     * Get a single employee by id
     * @param id Id of the employee to retrieve
     * @returns Observable with the employee data
     */
    getEmployee(id: number): Observable<Employee> {
        // Send a GET request to the server with the id
        // of the employee to retrieve.
        return this.http.get<Employee>(`${this.baseUrl}/${this.endpoint}/${id}`);
    }

    /**
     * Add new employee data to the server.
     *
     * @param data The data of the new employee to add.
     *
     * @returns An Observable with the data of the new employee added.
     */
    addEmployeeData(data: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.baseUrl}/${this.endpoint}`, data);
    }
}

