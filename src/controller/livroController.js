import livro from "../models/Livro.js";

class LivroController {

  static async listarLivros(req, res, next) {
    try {          
      const livrosResultado = await livro.find().populate("autor").exec();
      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivroID(req, res, next) {
    try {
      const id = req.params.id;
      const Livro = await livro.findById(id);
      res.status(200).json({ message: "Livro encontrado!", Livro });
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarLivro(req, res, next) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const { id } = req.params;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado!" });
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const { id } = req.params;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro excluído com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivroEditora(req, res, next) {
    const editora = req.query.editora;
    try {
      const livroEditora = await livro.find({ editora: editora }); // 1º editora: é a propriedade editora que tem no banco. A 2º editora: é a variável que guarda a informação que chegará via rota
      res.status(200).json(livroEditora);
    } catch (erro) {
      next(erro);
    }
  }

}

export default LivroController;
