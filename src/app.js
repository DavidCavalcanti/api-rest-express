import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

const connection = await connectDatabase();

connection.on("Error", (erro) => {
  console.error("Erro de conexão", erro);
});

connection.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();
routes(app);

app.use(manipulador404);
app.use(manipuladorDeErros);

export default app;