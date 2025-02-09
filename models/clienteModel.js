const pool = require('../lib/db');

const getAll = async () => {
  try {
    const [result] = await pool.execute('SELECT id_cliente, nombre, apellido, email, telefono FROM clientes');
    return result;
  } catch (err) {
    throw new Error('Error al obtener clientes: ' + err.message);
  }
};

const getOne = async (id) => {
  try {
    const result = await pool.execute('SELECT id_cliente, nombre, apellido, email, telefono FROM clientes WHERE id = ?', [id])
    if (result.affectedRows === 0) {
      throw new Error('Cliente no encontrado');
    }
    return result;
  }catch(err){
    return { message: `Cliente al intentar obtener cliente con id: ${id}, ${err.message}` }
  }
}

const create = async (nombre, apellido, email, telefono) => {
  try {
    const [result] = await pool.execute('INSERT INTO clientes (nombre, apellido, email, telefono) VALUES (?,?,?,?)', [nombre, apellido, email, telefono])
    return { id: result.insertId}
  }catch(err){
    throw new Error('Error al crear cliente: ' + err.message)
  }
};

const updateForId = async (id, nombre, apellido, email, telefono) => {
  try {
    const [result] = await pool.execute('UPDATE clientes SET nombre = ?, apellido = ?, email = ?, telefono = ? WHERE id_cliente = ?', [nombre, apellido, email, telefono, id])
    if (result.affectedRows === 0) {
      throw new Error('Cliente no encontrado');
    }
    return { message: `Cliente ${id} modificado` }
  }catch(err){
    throw new Error('Error al modificar cliente: ' + err.message)
  }
}

const deleteForId = async (id) => {
  try {
    const [result] = await pool.execute('DELETE FROM clientes WHERE id_cliente = ?', [id])
    if (result.affectedRows === 0) {
      throw new Error('Cliente no encontrado');
    }
    return { message: `Cliente con el id ${id} eliminado` }
  }catch(err){
    throw new Error('Error al borrar cliente: ' + err.message)
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  updateForId,
  deleteForId
};