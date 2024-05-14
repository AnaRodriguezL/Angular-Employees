import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from '../models/employee.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly endpoint = 'auth';
    private baseUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    login(data: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.baseUrl}/${this.endpoint}`, data);
    }
}

