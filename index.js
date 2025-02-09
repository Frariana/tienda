const express = require ('express');
const bodyParser = require('body-parser');
const routeCliente = require('./routes/clienteRoute');
const routeProducto = require('./routes/productoRoute');
const db = require('./lib/db');

const app = express();
app.use(bodyParser.json());

app.use('/clientes', routeCliente); 
app.use('/productos', routeProducto); 

db.getConnection()
  .then(() => console.log('Conectado a la base de datos MySQL'))
  .catch((err) => console.log('Error al conectar a la base de datos MySQL', err));
                       
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})