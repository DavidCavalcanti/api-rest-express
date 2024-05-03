import express from "express";
import LivroController from "../controller/livroController.js";
import paginar from "../middlewares/paginar.js";

const livroRoutes = express.Router();

livroRoutes
  .get("/livros", LivroController.listarLivros, paginar)
  .get("/livros/busca", LivroController.listarLivroPorFiltro, paginar)
  .get("/livros/:id", LivroController.listarLivroID)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivro);

export default livroRoutes;