import express from "express";
import { ObjectId } from "mongodb";

const api = express.Router();

// POST /mensajes - enviar mensaje
api.post("/", async (req, res) => {
  console.log("Funciona");
  res.json({ message: "Funciona"});
});

// GET /mensajes/:userId - obtener mensajes de un usuario
api.get("/:userId", async (req, res) => {
  console.log("Funciona");
  res.json({ message: "Funciona"});
});

export default api;
