import express from "express";
import { ObjectId } from "mongodb";

const api = express.Router();

// POST /seguidores/seguir - seguir usuario
api.post("/seguir", async (req, res) => {
  console.log("Funciona");
  res.json({ message: "Funciona"});
});

// POST /seguidores/dejar - dejar de seguir
api.post("/dejar", async (req, res) => {
  console.log("Funciona");
  res.json({ message: "Funciona"});
});

export default api;
