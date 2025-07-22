import Produccion from '../model/produccion.m.js';

const produccionDAO = {};

produccionDAO.getAll = async () => Produccion.find();
produccionDAO.getByUsuario = async (usuario) => Produccion.find({ usuario });
produccionDAO.getById = async (id) => Produccion.findById(id);
produccionDAO.insert = async (data) => Produccion.create(data);
produccionDAO.update = async (id, data) => Produccion.findByIdAndUpdate(id, data, { new: true });
produccionDAO.delete = async (id) => Produccion.findByIdAndDelete(id);

export default produccionDAO; 