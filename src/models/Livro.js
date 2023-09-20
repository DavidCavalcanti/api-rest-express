import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: mongoose.Schema.Types.String, required: true },
    autor: { type: mongoose.Schema.Types.String, required: true },
    editora: { type: mongoose.Schema.Types.String, required: true },
    numeroPagina: { type: Number }
}, { versionKey: false });

const livro = mongoose.model('livros', livroSchema);

export default livro;