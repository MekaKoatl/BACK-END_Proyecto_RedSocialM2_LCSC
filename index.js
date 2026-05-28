import express from "express";
import cors from "cors";
// import { connectDB } from "./db.js";
import usuariosApi from "./api/usuarios.js";
import { MongoClient } from "mongodb";
import postsApi from "./api/posts.js";
import seguidoresApi from "./api/seguidores.js";
import mensajesApi from "./api/mensajes.js";

import dns from "dns"

// DNS de Google
dns.setServers(['8.8.8.8', '8.8.4.4']);
let db;

const uri = "mongodb+srv://carlosraf_db_user:Carlos2026@cluster0.2pdgtpm.mongodb.net/?appName=Cluster0";
const app = express();


const client = await MongoClient.connect(uri);

app.locals.db = client.db("red-social");
// console.log("MongoDB local conectado");
console.log("MongoDB Atlas conectado");

app.use(cors());
app.use(express.json());

// Rutas // apis
app.use("/usuarios", usuariosApi);
app.use("/posts", postsApi);
app.use("/seguidores", seguidoresApi);
app.use("/mensajes", mensajesApi);

app.get("/", (req, res) => {
  res.json({ message: "Servidor funcionando" });
});


app.listen(3000)