const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
};

const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) {
        console.error(`Error al conectarse a la base de datos: ${err.stack}`);
        return process.exit(1);
    }
    console.log('Conectado a la base de datos');
});

module.exports = connection;