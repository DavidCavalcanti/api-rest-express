import express from "express";
import LivroController from "../controller/livroController.js";

const livroRoutes = express.Router();

livroRoutes
    .get("/livros", LivroController.listarLivros)
    .post("/livros", LivroController.cadastrarLivro)

export default livroRoutes;