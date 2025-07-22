import Material from '../model/material.m.js';

const materialDAO = {};

materialDAO.getAll = async () => Material.find();
materialDAO.getByUsuario = async (usuario) => Material.find({ usuario });
materialDAO.getById = async (id) => Material.findById(id);
materialDAO.insert = async (data) => Material.create(data);
materialDAO.update = async (id, data) => Material.findByIdAndUpdate(id, data, { new: true });
materialDAO.delete = async (id) => Material.findByIdAndDelete(id);

export default materialDAO; 