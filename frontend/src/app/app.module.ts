// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './components/app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeModalComponent } from './components/employees/add-employee-modal/add-employee-modal.component';
import { DeleteEmployeeModalComponent } from './components/employees/delete-employee-modal/delete-employee-modal.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        EmployeesComponent,
        AddEmployeeModalComponent,
        DeleteEmployeeModalComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    exports: []
})

export class AppModule { }
