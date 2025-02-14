const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sarastro_tienda-test',
    connectionLimit: 10 // Puedes ajustar este valor
});

module.exports = pool.promise();