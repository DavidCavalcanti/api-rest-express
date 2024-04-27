import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: {
    type: mongoose.Schema.Types.String,
    required: [true, "O título do livro é obrigatório"]
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(a) autor(a) é obrigatório"]
  },
  editora: {
    type: mongoose.Schema.Types.String,
    required: [true, "A editora é obrigatória"]
  },
  numeroPaginas: { 
    type: mongoose.Schema.Types.Number,
    min: [10, "O número de páginas deve estar entre 10 e 5000"],
    max: [5000, "O número de páginas deve estar entre 10 e 5000."]
  }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;