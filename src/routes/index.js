import express from "express";
import livrosRoutes from "./livroRoutes.js";

const routes = (app) => {
    app.route("/")
        .get((req, res) => {
            res.status(200).send("API Development");
        });

        app.use(express.json(), livrosRoutes);
};

export default routes;

