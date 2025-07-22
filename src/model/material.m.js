import { model, Schema } from "mongoose";

const MaterialSchema = new Schema({
  nombre: { type: String, required: true },
  color: { type: String, required: true },
  cantidad: { type: Number, required: true },
  descripcion: { type: String },
  usuario: { type: String, required: true }
}, { timestamps: true });

export default model("Material", MaterialSchema); 