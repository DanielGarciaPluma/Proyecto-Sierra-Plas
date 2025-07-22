import Precio from '../model/precio.m.js';

const precioDAO = {};

precioDAO.getAll = async () => Precio.find();
precioDAO.getByUsuario = async (usuario) => Precio.find({ usuario });
precioDAO.getById = async (id) => Precio.findById(id);
precioDAO.insert = async (data) => Precio.create(data);
precioDAO.update = async (id, data) => Precio.findByIdAndUpdate(id, data, { new: true });
precioDAO.delete = async (id) => Precio.findByIdAndDelete(id);

export default precioDAO; 