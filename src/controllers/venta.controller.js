import ventaDAO from '../dao/venta.dao.js';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'miclaveadmin123';

const ventaController = {};

function isAdmin(req) {
  return req.headers['admin-token'] === ADMIN_TOKEN;
}

function getUser(req) {
  return req.headers['user-id'];
}

ventaController.getAll = async (req, res) => {
  try {
    if (isAdmin(req)) {
      const ventas = await ventaDAO.getAll();
      return res.json(ventas);
    } else {
      const usuario = getUser(req);
      const ventas = await ventaDAO.getByUsuario(usuario);
      return res.json(ventas);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

ventaController.getById = async (req, res) => {
  try {
    const venta = await ventaDAO.getById(req.params.id);
    if (!venta) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && venta.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    res.json(venta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

ventaController.insert = async (req, res) => {
  try {
    const usuario = getUser(req);
    const data = { ...req.body, usuario };
    const venta = await ventaDAO.insert(data);
    res.status(201).json(venta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

ventaController.update = async (req, res) => {
  try {
    const venta = await ventaDAO.getById(req.params.id);
    if (!venta) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && venta.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    const updated = await ventaDAO.update(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

ventaController.delete = async (req, res) => {
  try {
    const venta = await ventaDAO.getById(req.params.id);
    if (!venta) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && venta.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    await ventaDAO.delete(req.params.id);
    res.json({ message: 'Eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default ventaController; 