import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    employee: any = {};
    error = '';

    constructor(private authService: AuthService, private router: Router) { }

    /**
     * Login function
     *
     * This function is called when the user clicks the login button.
     * It sends a POST request to the backend with the username and password
     * entered by the user, and redirects the user to the appropriate page
     * based on the user's role.
     */
    login() {
        this.authService.login({ ...this.employee }).subscribe(
            /**
             * Success callback
             *
             * @param response Response from the backend
             */
            response => {
                if (response.role === 'admin') {
                    this.employee = {};
                    this.router.navigate(['/form']); // Go to the form page
                } else {
                    this.employee = {};
                    this.router.navigate(['/employees']); // Go to the employees page
                }
                this.error = ''; // Clear the error message
            },
            /**
             * Error callback
             *
             * @param error Error from the backend
             */
            error => {
                console.log(error); // Log the error to the console
                this.error = error.error.message; // Set the error message
            }
        );
    }
}

