const pool = require('../lib/db');

const getAll = async () => {
  try {
    const [result] = await pool.execute('SELECT * FROM clientes');
    return result;
  } catch (err) {
    throw new Error('Error al obtener clientes: ' + err.message);
  }
};

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
    const [result] = await pool.execute('UPDATE clientes SET nombre = ?, apellido = ?, email = ?, telefono = ? WHERE id = ?', [nombre, apellido, email, telefono, id])
    if (result.affectedRows === 0) {
      throw new Error('Cliente no encontrado');
    }
    return { message: `Cliente con el id ${id} modificado` }
  }catch(err){
    throw new Error('Error al modificar cliente: ' + err.message)
  }
}

const deleteForId = async (id) => {
  try {
    const [result] = await pool.execute('DELETE FROM clientes WHERE id = ?', [id])
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
  create,
  updateForId,
  deleteForId
};