import express from "express";
import AutorController from "../controller/autorController.js";

const autorRoutes = express.Router();

autorRoutes
  .get("/autor", AutorController.listarAutores)
  .get("/autor/:id", AutorController.listaAutorId)
  .post("/autor", AutorController.cadastrarAutor)
  .put("/autor/:id", AutorController.atualizarAutor)
  .delete("/autor/:id", AutorController.deletarAutor);

export default autorRoutes;