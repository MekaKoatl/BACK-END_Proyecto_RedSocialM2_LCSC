import "dotenv/config";
import { MongoClient } from "mongodb";

// const client = new MongoClient(
//   "mongodb://admin:admin123@localhost:27017/?authSource=admin",
// );
console.log(process.env.MONGODB_URI)
let db;

export async function connectDB() {
 const client = await MongoClient.connect(process.env.MONGODB_URI);

  db = client.db("red-social");
  // console.log("MongoDB local conectado");
  console.log("MongoDB Atlas conectado");
}

export function getDB() {
  return db;
}