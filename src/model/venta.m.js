import { model, Schema } from "mongoose";

const VentaSchema = new Schema({
  tipoClase: { type: String, required: true },
  tipoCapa: { type: String, required: true },
  reforzado: { type: Boolean, required: true },
  cantidad: { type: Number, required: true },
  descripcion: { type: String },
  capacidadLitros: { type: Number, required: true },
  usuario: { type: String, required: true }
}, { timestamps: true });

export default model("Venta", VentaSchema); 