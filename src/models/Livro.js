import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";


const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: {
    type: mongoose.Schema.Types.String,
    required: [true, "O título do livro é obrigatório"]
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(a) autor(a) é obrigatório"],
    autopopulate: true
  },
  editora: {
    type: mongoose.Schema.Types.String,
    required: [true, "A editora é obrigatória"],
    enum: {
      values: ["Casa do código", "Unihell", "Edições ASA", "Univasf"],
      message: "A editora '{VALUE}' fornecida não é permitida."
    }
  },
  numeroPaginas: { 
    type: mongoose.Schema.Types.Number,
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      }, 
      message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}."
    }
  }
}, { versionKey: false });

livroSchema.plugin(mongooseAutoPopulate);

const livro = mongoose.model("livros", livroSchema);

export default livro;