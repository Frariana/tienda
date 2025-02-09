const express = require('express');
const router  = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.getAllClientes);  
router.get('/:id', clientesController.getOneCliente);
router.post('/', clientesController.newCliente);
router.put('/:id', clientesController.updateClienteForId);
router.delete('/:id', clientesController.deleteClienteForId);

module.exports = router;