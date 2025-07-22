import Venta from '../model/venta.m.js';

const ventaDAO = {};

ventaDAO.getAll = async () => Venta.find();
ventaDAO.getByUsuario = async (usuario) => Venta.find({ usuario });
ventaDAO.getById = async (id) => Venta.findById(id);
ventaDAO.insert = async (data) => Venta.create(data);
ventaDAO.update = async (id, data) => Venta.findByIdAndUpdate(id, data, { new: true });
ventaDAO.delete = async (id) => Venta.findByIdAndDelete(id);

export default ventaDAO; 