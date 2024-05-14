<h1 align="center">📊 Employee Management Application</h1>

Welcome to our Employee Management Platform! This comprehensive solution is designed to streamline various aspects of employee administration. Developed with Angular for the frontend, Node.js and Express for the backend, and MySQL as the database, our platform offers a user-friendly interface coupled with robust functionality.

<br>

## 🚀 Key Features
**Employee Creation and Role Assignment:** Easily create new employee profiles and assign them appropriate roles within your organization.

**User and Password Generation:** Seamlessly generate user accounts and passwords for employees to access the platform, ensuring secure authentication.

**User Management:** Empower administrators to manage user accounts efficiently, including the ability to remove accounts if necessary.

**Vaccine Information Tracking:** Keep track of important vaccine information for employees, allowing them to update their vaccination status and related details.

<br>

## 🛠️ System Requirements

**Node.js and npm:** Make sure you have Node.js and npm installed on your system. You can download them from [here](https://nodejs.org/).

<br>

## 🚀 Installation

### Frontend (Angular)

Install Angular CLI globally if you haven't already:
```bash
npm install -g @angular/cli
```

In the `frontend` directory, install project dependencies:
```bash
npm install
```

<br>

### Backend (Node.js)

In the `backend` directory, install project dependencies:
```bash
npm install
```
Make sure you have MySQL installed and configured on your system.

<br>

## ⚙️ Configuration DB

In the `backend` directory, create a `.env` file and add your MySQL database configuration:
```sql
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_DATABASE=employees_db
```
Make sure you have created the `employees_db` database on your MySQL server.

<br>

## ▶️ Execution

### Frontend (Angular)

Run the following command in the `frontend` directory to start the development server:
```bash
ng serve
```
The application will be available at `http://localhost:4200/`.

<br>

### Backend (Node.js)
Run the following command in the `backend` directory to start the server:

```bash
npm start
```
The server will be available at `http://localhost:3000/`.

<br>

## 📦 Dependencies

### Frontend (Angular)

- @angular/common
- @angular/compiler
- @angular/core
- @angular/forms
- @angular/platform-browser
- @angular/platform-browser-dynamic
- @angular/router
- rxjs

### Backend (Node.js)

- express
- mysql
- body-parser
- cors

<br>

## 📜 License

This project is under the MIT License. See the [LICENSE](LICENSE) file for more details.