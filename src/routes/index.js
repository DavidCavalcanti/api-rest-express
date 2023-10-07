import express from "express";
import livrosRoutes from "./livroRoutes.js";
import autorRoutes from "./autorRoutes.js";

const routes = (app) => {
  app.route("/")
    .get((req, res) => {
      res.status(200).send("API Development");
    });

  app.use(express.json(), livrosRoutes, autorRoutes);
};

export default routes;

