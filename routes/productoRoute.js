const express = require('express');
const router  = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.getAllproductos);
router.post('/', productosController.newproducto);
router.delete('/', productosController.deleteAllproducto);

router.get('/:id', productosController.getOneproducto);
router.patch('/:id', productosController.updateproducto);
router.delete('/:id', productosController.deleteOneproducto);

module.exports = router;