import precioDAO from '../dao/precio.dao.js';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'miclaveadmin123';

const precioController = {};

function isAdmin(req) {
  return req.headers['admin-token'] === ADMIN_TOKEN;
}

function getUser(req) {
  return req.headers['user-id'];
}

precioController.getAll = async (req, res) => {
  try {
    if (isAdmin(req)) {
      const precios = await precioDAO.getAll();
      return res.json(precios);
    } else {
      const usuario = getUser(req);
      const precios = await precioDAO.getByUsuario(usuario);
      return res.json(precios);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

precioController.getById = async (req, res) => {
  try {
    const precio = await precioDAO.getById(req.params.id);
    if (!precio) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && precio.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    res.json(precio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

precioController.insert = async (req, res) => {
  try {
    const usuario = getUser(req);
    const data = { ...req.body, usuario };
    const precio = await precioDAO.insert(data);
    res.status(201).json(precio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

precioController.update = async (req, res) => {
  try {
    const precio = await precioDAO.getById(req.params.id);
    if (!precio) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && precio.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    const updated = await precioDAO.update(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

precioController.delete = async (req, res) => {
  try {
    const precio = await precioDAO.getById(req.params.id);
    if (!precio) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && precio.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    await precioDAO.delete(req.params.id);
    res.json({ message: 'Eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default precioController; 