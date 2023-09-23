import express from "express";
import LivroController from "../controller/livroController.js";

const livroRoutes = express.Router();

livroRoutes
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivroID)
    .post("/livros", LivroController.cadastrarLivro)

export default livroRoutes;