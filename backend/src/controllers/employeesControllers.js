const connection = require('../config/dbConfig');
const Employee = require('../models/employee');

/**
 * List all employees in the database
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {Object} The response object with the list of employees
 */
exports.listEmployees = (req, res, next) => {
    // Query the database to get all employees
    connection.query('SELECT * FROM employees', (err, rows) => {
        // If there is an error, call the next middleware function
        if (err) return next(err);
        // If there is no error, return the list of employees
        res.json(rows);
    });
};

/**
 * Get a single employee by id
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {Object} The response object with the employee
 */
exports.getEmployee = (req, res, next) => {
    const { id } = req.params;
    // Query the database to get the employee
    connection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows) => {
        // If there is an error, call the next middleware function
        if (err) return next(err);
        // If there is no error, return the employee
        res.json(rows);
    });
};


/**
 * Register a new employee
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {Object} The response object with the result of the query
 */
exports.registerEmployee = (req, res, next) => {
    const { identification, names, surnames, email, username, password, role } = req.body;
    // Query the database to insert a new employee
    connection.query('INSERT INTO employees (identification, names, surnames, email, username, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)', 
    [identification, names, surnames, email, username, password, role], (err, result) => {
        // If there is an error, call the next middleware function
        if (err) return next(err);
        // If there is no error, return the result of the query
        res.json(result);
    });
};

/**
 * Edit an employee
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {Object} The response object with the result of the query
 */
exports.editEmployee = (req, res, next) => {
    // The updated employee data
    const employee = req.body;
    // The id of the employee to update
    const { id } = req.params;

    // Query the database to update the employee
    connection.query('UPDATE employees SET ? WHERE id = ?', [employee, id], (err, result) => {
        // If there is an error, call the next middleware function
        if (err) return next(err);
        // If the employee was not found, return a 404 status code
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        // If there is no error, return a success message
        res.json({ message: 'Employee updated' });
    });
};

/**
 * Delete an employee
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {Object} The response object with the result of the query
 */
exports.deleteEmployee = (req, res, next) => {
    // The id of the employee to delete
    const { id } = req.params;

    // Query the database to delete the employee
    connection.query('DELETE FROM employees WHERE id = ?', [id], (err, result) => {
        // If there is an error, call the next middleware function
        if (err) return next(err);
        // If the employee was not found, return a 404 status code
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        // If there is no error, return a success message
        res.json({ message: 'Employee deleted' });
    });
};
