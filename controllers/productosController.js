const productoModel = require('../models/productoModel');

const getAllproductos = (req, res, next) => {
    res.json({message: "Obteniendo todos los productos"});
};

const newproducto = (req, res, next) => {
    res.json({message: "POST new producto"});
};

const deleteAllproducto = (req, res, next) => {
    res.json({message: "DELETE all producto"});
};

const getOneproducto = (req, res, next) => {
    res.json({message: "GET 1 producto"});
};

const updateproducto = (req, res, next) => {
    res.json({message: "GET 1 producto"});
};

const deleteOneproducto = (req, res, next) => {
    res.json({message: "DELETE 1 producto"});
};


module.exports = {
    getAllproductos, 
    newproducto,
    deleteAllproducto,
    updateproducto,
    getOneproducto,
    deleteOneproducto
};