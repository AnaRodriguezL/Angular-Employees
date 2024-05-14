import { Component, EventEmitter, Output } from '@angular/core';

import { EmployeesComponent } from '../employees.component';
import { EmployeesService } from '../../../services/employees.service';

@Component({
    selector: 'app-add-employee-modal',
    templateUrl: './add-employee-modal.component.html',
    styleUrls: ['./add-employee-modal.component.css']
})

export class AddEmployeeModalComponent {
    // Object to store employee data
    employee: any = {};

    constructor(private employeesService: EmployeesService,
        private employeesComponent: EmployeesComponent
    ) { }

    // Saves a new employee in the employees service.
    save(): void {
        const modal = document.querySelector('.modal-add') as HTMLElement;
        modal.style.display = 'none';

        // Generate username
        const username = this.generateUsername(this.employee.names, this.employee.surnames);

        // Generate random password
        const password = this.generateRandomPassword();

        // Save the employee in the service
        this.employeesService.addEmployee({ ...this.employee, username, password })
            .subscribe(
                /**
                 * Function executed when the employee is saved successfully.
                 * @param response Response from the service when saving the employee.
                 */
                (response) => {
                    this.employeesComponent.getEmployees();
                    // Clear the form data after saving
                    this.employee = {};
                },
                /**
                 * Function executed when there is an error saving the employee.
                 * @param error Error returned by the service.
                 */
                (error) => console.log(error)
            );
    }

    /**
     * Closes the add employee modal.
     *
     * Clears the form data and sets the display of the modal to none.
     */
    close(): void {
        const modal = document.querySelector('.modal-add') as HTMLElement;
        modal.style.display = 'none'; // Hide the modal

        this.employee = {}; // Clear the form data
    }

    // Method to generate username
    generateUsername(names: string, surnames: string): string {
        // Take the first letters of the name and surname
        const firstNameInitial = names?.charAt(0).toLowerCase() || '';
        const lastNameInitial = surnames?.charAt(0).toLowerCase() || '';

        // Combine the initials to form the username
        return firstNameInitial + lastNameInitial;
    }

    // Method to generate random password
    generateRandomPassword(): string {
        // Define the allowed characters for the password
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        // Length of the password
        const passwordLength = 8;

        // Generate random password
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }

    // Prevent entry of numbers and special characters
    preventInput(event: any) {
        const charCode = event.which ? event.which : event.keyCode;
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            return true;
        } else {
            event.preventDefault();
            return false;
        }
    }

    // Check if all inputs have any value
    checkInputs() {
        return this.employee.identification && this.employee.names && this.employee.surnames && this.employee.email && this.employee.role;
    }

    // Enable the button if all inputs are filled
    areInputsFilled() {
        return this.checkInputs();
    }
}

