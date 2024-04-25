import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res, next) {
    try {
      const todosAutores = await autor.find({});
      res.status(200).json(todosAutores);
    } catch (erro) {
      next(erro);
    }
  }

  static async listaAutorId(req, res, next) {
    try {
      const { id } = req.params;
      const Autor = await autor.findById(id);
      if(Autor !== null){
        res.status(200).json({ message: "Autor econtrado:", Autor });
      }else{
        res.status(404).json({ message: "ID do autor não localizado." });
      }            
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Operação bem sucedida!", autor: novoAutor });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const { id } = req.params;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atualização feita com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const { id } = req.params;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor(a) excluído com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  }
}

export default AutorController;