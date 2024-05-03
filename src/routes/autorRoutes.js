import express from "express";
import AutorController from "../controller/autorController.js";
import paginar from "../middlewares/paginar.js";

const autorRoutes = express.Router();

autorRoutes
  .get("/autor", AutorController.listarAutores, paginar)
  .get("/autor/:id", AutorController.listaAutorId)
  .post("/autor", AutorController.cadastrarAutor)
  .put("/autor/:id", AutorController.atualizarAutor)
  .delete("/autor/:id", AutorController.deletarAutor);

export default autorRoutes;