import express from "express";
import LivroController from "../controller/livroController.js";

const livroRoutes = express.Router();

livroRoutes
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivroEditora)
  .get("/livros/:id", LivroController.listarLivroID)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivro);

export default livroRoutes;