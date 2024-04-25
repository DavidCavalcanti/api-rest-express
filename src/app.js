import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import erros from "./middlewares/Erros.js";

const connection = await connectDatabase();

connection.on("Error", (erro) => {
  console.error("Erro de conexão", erro);
});

connection.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();
routes(app);

// eslint-disable-next-line no-unused-vars
app.use(erros);

export default app;