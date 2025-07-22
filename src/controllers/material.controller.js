
import materialDAO from '../dao/material.dao.js';

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'miclaveadmin123';

const materialController = {};

function isAdmin(req) {
  return req.headers['admin-token'] === ADMIN_TOKEN;
}

function getUser(req) {
  return req.headers['user-id'];
}

materialController.getAll = async (req, res) => {
  try {
    if (isAdmin(req)) {
      const materiales = await materialDAO.getAll();
      return res.json(materiales);
    } else {
      const usuario = getUser(req);
      const materiales = await materialDAO.getByUsuario(usuario);
      return res.json(materiales);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

materialController.getById = async (req, res) => {
  try {
    const material = await materialDAO.getById(req.params.id);
    if (!material) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && material.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    res.json(material);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

materialController.insert = async (req, res) => {
  try {
    const usuario = getUser(req);
    const data = { ...req.body, usuario };
    const material = await materialDAO.insert(data);
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

materialController.update = async (req, res) => {
  try {
    const material = await materialDAO.getById(req.params.id);
    if (!material) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && material.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    const updated = await materialDAO.update(req.params.id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

materialController.delete = async (req, res) => {
  try {
    const material = await materialDAO.getById(req.params.id);
    if (!material) return res.status(404).json({ message: 'No encontrado' });
    if (!isAdmin(req) && material.usuario !== getUser(req)) {
      return res.status(403).json({ message: 'Sin permiso' });
    }
    await materialDAO.delete(req.params.id);
    res.json({ message: 'Eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default materialController;
 