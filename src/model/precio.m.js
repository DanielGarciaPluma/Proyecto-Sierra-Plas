import { model, Schema } from "mongoose";

const PrecioSchema = new Schema({
  producto: { type: String, required: true },
  precio: { type: Number, required: true },
  usuario: { type: String, required: true }
}, { timestamps: true });

export default model("Precio", PrecioSchema); 