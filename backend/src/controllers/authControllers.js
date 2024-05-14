const connection = require('../config/dbConfig');

/**
 * Authenticate an employee
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {Object} The response object with the result of the query
 */
exports.authEmployee = (req, res, next) => {
    // The username and password sent in the request body
    const { username, password } = req.body;

    // Query the database to find the employee with the given username
    connection.query('SELECT * FROM employees WHERE username = ?', [username], (err, result) => {
        // If there is an error, call the next middleware function
        if (err) return next(err);
        // If the employee was not found, return a 401 status code
        if (result.length === 0) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }
        // If the password is not valid, return a 401 status code
        const validPassword = result[0].password === password;
        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        // If there is no error, return the result of the query
        res.json(result);
    });
};