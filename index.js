import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import usuariosRoutes from './rutas/usuarios.js';
app.use('/usuarios', usuariosRoutes);
// import bcrypt from 'bcrypt';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const uri = "mongodb://admin:admin123@127.0.0.1:27017";

let db;

app.get("/", (req, res) => {
  res.json({ message: "Servidor funcionando" });
});



connectDB().then(() => {
  app.listen(3000, () => console.log("Servidor en puerto 3000"));
});
