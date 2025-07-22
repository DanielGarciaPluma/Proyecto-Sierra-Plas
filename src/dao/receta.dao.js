import Receta from '../model/receta.m.js';

const recetaDAO = {};

recetaDAO.getAll = async () => Receta.find();
recetaDAO.getByUsuario = async (usuario) => Receta.find({ usuario });
recetaDAO.getById = async (id) => Receta.findById(id);
recetaDAO.insert = async (data) => Receta.create(data);
recetaDAO.update = async (id, data) => Receta.findByIdAndUpdate(id, data, { new: true });
recetaDAO.delete = async (id) => Receta.findByIdAndDelete(id);

export default recetaDAO; 