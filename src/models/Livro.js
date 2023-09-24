import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: mongoose.Schema.Types.String, required: true },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true },
    editora: { type: mongoose.Schema.Types.String, required: true },
    numeroPaginas: { type: mongoose.Schema.Types.Number }
}, { versionKey: false });

const livro = mongoose.model('livros', livroSchema);

export default livro;