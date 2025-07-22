import recetaDAO from '../dao/receta.dao.js';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'miclaveadmin123';

const recetaController = {};

function isAdmin(req) {
  return req.headers['admin-token'] === ADMIN_TOKEN;
}

function getUser(req) {
  return req.headers['user-id'];
}

recetaController.getAll = async (req, res) => {
  try {
    if (isAdmin(req)) {
      const recetas = await recetaDAO.getAll();
      return res.json(recetas);
    } else {
      const usuario = getUser(req);
      const recetas = await recetaDAO.getByUsuario(usuario);
      return res.json(recetas);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

recetaController.getById = async (req, res) => {
  try {
    const receta = await recetaDAO.getById(req.params.id);
    if (!receta) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && receta.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    res.json(receta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

recetaController.insert = async (req, res) => {
  try {
    const usuario = getUser(req);
    const data = { ...req.body, usuario };
    const receta = await recetaDAO.insert(data);
    res.status(201).json(receta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

recetaController.update = async (req, res) => {
  try {
    const receta = await recetaDAO.getById(req.params.id);
    if (!receta) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && receta.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    const updated = await recetaDAO.update(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

recetaController.delete = async (req, res) => {
  try {
    const receta = await recetaDAO.getById(req.params.id);
    if (!receta) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && receta.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    await recetaDAO.delete(req.params.id);
    res.json({ message: 'Eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default recetaController; 