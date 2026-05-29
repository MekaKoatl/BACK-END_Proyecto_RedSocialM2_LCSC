import express from "express";
import bcrypt from "bcryptjs";
import { getDB } from "../index.js";

const api = express.Router();

// POST /usuarios/registro
api.post("/registro", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const db = getDB();

     const existe = await req.app.locals.db.collection("usuarios").findOne({ user: existe });
    if (existe)
      return res.status(400).json({ message: "El usuario ya está registrado" });
    if(password.length < 6){
      return res.redirect("la contraseña es demasiado corta")
    }
    const hash = await bcrypt.hash(password, 10);
    const result = await req.app.locals.db
      .collection("usuarios")
      .insertOne({ username, email, password: hash, createdAt: new Date() });

    res.status(201).json({ message: "Usuario creado", id: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
});

// POST /usuarios/login
api.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = getDB();

    const usuario = await  req.app.locals.db.collection("usuarios").findOne({ email });
    if (!usuario)
      return res.status(404).json({ message: "Usuario no encontrado" });

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido)
      return res.status(401).json({ message: "Contraseña incorrecta" });

    res.json({
      message: "Login exitoso",
      usuario: { id: usuario._id, username: usuario.username },
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
});

//getprueba
api.get("/seeusers", async (req, res)=>{
try {
  const getusers = await req.app.locals.db.collection("usuarios").find().toArray()
  res.redirect(getusers)

}catch(error){res.status(500).json({ message: "Error en el servidor", error });}})


export default api;
