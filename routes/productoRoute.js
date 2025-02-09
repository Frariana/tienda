const express = require('express');
const router  = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.getAllProductos);  
router.get('/:id', productosController.getOneProducto);
router.post('/', productosController.newProducto);
router.put('/:id', productosController.updateProductoForId);
router.delete('/:id', productosController.deleteProductoForId);

module.exports = router;