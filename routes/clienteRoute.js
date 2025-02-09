const express = require('express');
const router  = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.getAllClientes);  
router.post('/', clientesController.newCliente);
router.put('/:id', clientesController.updateClienteForId);
router.delete('/:id', clientesController.deleteClienteForId);

// router.get('/:id', clientesController.getOneCliente);
// router.patch('/:id', clientesController.updateCliente);
// router.delete('/:id', clientesController.deleteOneCliente);

module.exports = router;