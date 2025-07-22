import produccionDAO from '../dao/produccion.dao.js';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'miclaveadmin123';

const produccionController = {};

function isAdmin(req) {
  return req.headers['admin-token'] === ADMIN_TOKEN;
}

function getUser(req) {
  return req.headers['user-id'];
}

produccionController.getAll = async (req, res) => {
  try {
    if (isAdmin(req)) {
      const producciones = await produccionDAO.getAll();
      return res.json(producciones);
    } else {
      const usuario = getUser(req);
      const producciones = await produccionDAO.getByUsuario(usuario);
      return res.json(producciones);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

produccionController.getById = async (req, res) => {
  try {
    const produccion = await produccionDAO.getById(req.params.id);
    if (!produccion) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && produccion.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    res.json(produccion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

produccionController.insert = async (req, res) => {
  try {
    const usuario = getUser(req);
    const data = { ...req.body, usuario };
    const produccion = await produccionDAO.insert(data);
    res.status(201).json(produccion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

produccionController.update = async (req, res) => {
  try {
    const produccion = await produccionDAO.getById(req.params.id);
    if (!produccion) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && produccion.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    const updated = await produccionDAO.update(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

produccionController.delete = async (req, res) => {
  try {
    const produccion = await produccionDAO.getById(req.params.id);
    if (!produccion) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && produccion.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    await produccionDAO.delete(req.params.id);
    res.json({ message: 'Eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default produccionController; 