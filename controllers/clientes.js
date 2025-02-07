const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda',
    connectionLimit: 10 // Puedes ajustar este valor
});

const getAllCliente = (req, res) => {
    pool.query('SELECT * FROM clientes', (err, results) => {
        if (err) {
            console.error('Error retrieving records: ', err);
            return res.status(500).send('Error retrieving records');
        }
        res.json(results);  // Cambié a res.json() para mayor claridad
    });
};

const newCliente = (req, res, next) => {
    res.json({message: "POST new Cliente"});
};

const deleteAllCliente = (req, res, next) => {
    res.json({message: "DELETE all Cliente"});
};

const getOneCliente = (req, res, next) => {
    res.json({message: "GET 1 Cliente"});
};

const updateCliente = (req, res, next) => {
    res.json({message: "GET 1 Cliente"});
};

const deleteOneCliente = (req, res, next) => {
    res.json({message: "DELETE 1 Cliente"});
};


module.exports = {
    getAllCliente, 
    newCliente,
    deleteAllCliente,
    updateCliente,
    getOneCliente,
    deleteOneCliente
};