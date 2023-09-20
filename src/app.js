import express from "express";
import connectDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const connection = await connectDatabase();

connection.on("Error", (erro) => {
    console.error("Erro de conexão", erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("API Development");
})

app.get('/livros', async (req, res) => {
    try {
        const livrosResultado = await livro.find();
        res.status(200).json(livrosResultado)
    } catch (err) {
        res.status(500).json(err);
    }
})

export default app;