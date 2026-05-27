const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Conexión a DB
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Servidor funcionando" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

const usuariosRoutes = require("./rutas/usuarios");
app.use("/usuarios", usuariosRoutes);
