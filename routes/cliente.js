const express = require('express');
const router  = express.Router();
const clientesController = require('../controllers/clientes');

router.get('/clientes', clientesController.getAllCliente);
router.post('clientes', clientesController.newCliente);
router.delete('/clientes', clientesController.deleteAllCliente);

router.get('/clientes/:id', clientesController.getOneCliente);
router.patch('/clientes/:id', clientesController.updateCliente);
router.delete('/clientes/:id', clientesController.deleteOneCliente);

module.exports = router;