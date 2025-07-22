import { model, Schema } from "mongoose";

const LoginSchema = new Schema(
  {
    nombre: {
      required: true, 
      type: String,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    _id: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    },
    sesionAbierta: {
      type: Boolean,
      default: false
    },
    rol: {
      type: String,
      enum: ['admin', 'usuario'],
      default: 'usuario',
    }
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);

export default model("Login", LoginSchema);