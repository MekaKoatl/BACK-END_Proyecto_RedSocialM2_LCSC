const express = require("express");
const cors = require("cors");
const dns = require('dns');
// require("dotenv").config();
// const connectDB = require("./db");
const { MongoClient } = require("mongodb");
const app = express();
const PORT = process.env.PORT || 3000;

let db;
async function start() {
  const client = await MongoClient.connect(
    "mongodb+srv://carlosraf_db_user:nVn6imqwbTRcQ3J5@cluster0.2pdgtpm.mongodb.net/?appName=Cluster0",
  );
  db = client.db("red-social");
  app.listen(3000);
}

start();

app.use(cors());
app.use(express.json());

// // Conexión a DB
// connectDB();

// const usuariosRoutes = require("./rutas/usuarios");
// app.use("/usuarios", usuariosRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Servidor funcionando" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
