import { model, Schema } from "mongoose";

const RecetaSchema = new Schema({
  nombre: { type: String, required: true },
  ingredientes: [{ type: String, required: true }],
  pasos: { type: String },
  usuario: { type: String, required: true }
}, { timestamps: true });

export default model("Receta", RecetaSchema); 