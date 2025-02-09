const productoModel = require('../models/productoModel');

const getAllProductos = async (req, res) => {
  try {
    const productos = await productoModel.getAll();
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getOneProducto = async (req, res) => {
  const { id } = req.params;
  try{
    const result = await productoModel.getOne(id);
    res.status(200).json(result);
  }catch (err){
    res.status(500).json({message: err.message})
  }
};

const newProducto = async (req, res) => {
  const { descripcion, peso } = req.body;
  try{
    const nuevoProducto = await productoModel.create(descripcion, peso);
    res.status(201).json(nuevoProducto);
  }catch (err){
    res.status(500).json({message: err.message})
  }
};

const updateProductoForId = async (req, res) => {
  const { id } = req.params;
  const { descripcion, peso } = req.body;
  try{
    const result = await productoModel.updateForId(id, descripcion, peso);
    res.status(200).json(result);
  }catch (err){
    res.status(500).json({message: err.message})
  }
};

const deleteProductoForId = async (req, res) => {
  const { id } = req.params;
  try{
    const result = await productoModel.deleteForId(id);
    res.status(200).json(result);
  }catch (err){
    res.status(500).json({message: err.message})
  }
};

module.exports = {
  getAllProductos,
  getOneProducto,
  newProducto,
  updateProductoForId,
  deleteProductoForId
};