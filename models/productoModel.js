const pool = require('../lib/db');

const getAll = async () => {
  try {
    const [result] = await pool.execute('SELECT id_producto, descripcion, peso FROM productos');
    return result;
  } catch (err) {
    throw new Error('Error al obtener productos: ' + err.message);
  }
};

const getOne = async (id) => {
  try {
    const result = await pool.execute('SELECT id_producto, descripcion, peso FROM productos WHERE id_producto = ?', [id])
    if (result.affectedRows === 0) {
      throw new Error('Producto no encontrado');
    }
    return result;
  }catch(err){
    return { message: `Error al intentar obtener cliente con id: ${id}, ${err.message}` }
  }
}

const create = async (descripcion, peso) => {
  try {
    const [result] = await pool.execute('INSERT INTO productos (descripcion, peso) VALUES (?,?,?,?)', [descripcion, peso])
    return { id: result.insertId}
  }catch(err){
    throw new Error('Error al crear cliente: ' + err.message)
  }
};

const updateForId = async (id, descripcion, peso) => {
  try {
    const [result] = await pool.execute('UPDATE productos SET descripcion = ?, peso = ? WHERE id_producto = ?', [descripcion, peso, id])
    if (result.affectedRows === 0) {
      throw new Error('Producto no encontrado');
    }
    return { message: `Producto ${id} modificado` }
  }catch(err){
    throw new Error('Error al modificar cliente: ' + err.message)
  }
}

const deleteForId = async (id) => {
  try {
    const [result] = await pool.execute('DELETE FROM productos WHERE id_producto = ?', [id])
    if (result.affectedRows === 0) {
      throw new Error('Producto no encontrado');
    }
    return { message: `Producto con el id ${id} eliminado` }
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