import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    autor: autorSchema,
    editora: { type: mongoose.Schema.Types.String, required: true },
    numeroPaginas: { type: mongoose.Schema.Types.Number }
}, { versionKey: false });

const livro = mongoose.model('livros', livroSchema);

export default livro;