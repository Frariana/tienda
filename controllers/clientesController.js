const clienteModel = require('../models/clienteModel');

const getAllClientes = async (req, res) => {
  try {
    const clientes = await clienteModel.getAll();
    res.status(200).json(clientes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getOneCliente = async (req, res) => {
  const { id } = req.params;
  try{
    const result = await clienteModel.getOne(id);
    res.status(200).json(result);
  }catch (err){
    res.status(500).json({message: err.message})
  }
};

const newCliente = async (req, res) => {
  const { nombre, apellido, email, telefono } = req.body;
  try{
    const nuevoCliente = await clienteModel.create(nombre, apellido, email, telefono);
    res.status(201).json(nuevoCliente);
  }catch (err){
    res.status(500).json({message: err.message})
  }
};

const updateClienteForId = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, email, telefono } = req.body;
  try{
    const result = await clienteModel.updateForId(id, nombre, apellido, email, telefono);
    res.status(200).json(result);
  }catch (err){
    res.status(500).json({message: err.message})
  }
};

const deleteClienteForId = async (req, res) => {
  const { id } = req.params;
  try{
    const result = await clienteModel.deleteForId(id);
    res.status(200).json(result);
  }catch (err){
    res.status(500).json({message: err.message})
  }
};

module.exports = {
  getAllClientes,
  getOneCliente,
  newCliente,
  updateClienteForId,
  deleteClienteForId
};