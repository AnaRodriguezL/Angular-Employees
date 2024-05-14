import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee.model';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

    employees: Employee[] = [];

    constructor(private employeesService: EmployeesService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.getEmployees();
    }

    /**
     * Fetches the list of employees from the backend.
     */
    getEmployees() {
        this.employeesService.getEmployees()
            .subscribe(
                // Callback function to execute when the observable emits a value.
                // The backend sends back an array of Employee objects,
                // which we assign to the component's employees property.
                (res: Employee[]) => this.employees = res,
                // Callback function to execute when the observable raises an error.
                // The error is logged to the console.
                error => console.error('Error fetching employees:', error)
            );
    }
    
    /**
     * Opens the modal to add a new employee.
     */
    openAddModal(): void {
        const modal = document.querySelector('.modal-add') as HTMLElement;
        modal.style.display = 'block'; // Show the modal
    }

    /**
     * Opens the modal to delete an existing employee.
     * 
     * @param id The ID of the employee to delete.
     */
    openDeleteModal(id: number): void {
        const modal = document.querySelector('.modal-delete') as HTMLElement;
        
        // Store the employee ID in the data attribute of the modal
        modal.dataset['employeeId'] = id.toString();
        
        // Show the modal
        modal.style.display = 'block';
    }


    /**
     * Callback function to execute when the delete modal is closed.
     * 
     * @param confirm Whether the user confirmed or cancelled the deletion.
     */
    onDelete(confirm: boolean): void {
        const modal = document.querySelector('.modal-delete') as HTMLElement;
        modal.style.display = 'none'; // Hide the modal

        if (confirm) {
            const id = modal.dataset['employeeId'];
            this.employeesService.deleteEmployee(Number(id)) // Delete the employee from the backend
                .subscribe(
                    () => this.getEmployees(), // Fetch the updated list of employees
                    error => console.error('Error deleting employee:', error) // Log the error
                );
        }
    }

}