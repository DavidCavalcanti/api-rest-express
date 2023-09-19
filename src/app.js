import express from "express";
import connectDatabase from "./config/dbConnect.js";

const connection = await connectDatabase();

connection.on("Error", (erro) => {
    console.error("Erro de conexão", erro);
});

connection.once("open", ()=> {
    console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("API Development");
})

export default app;