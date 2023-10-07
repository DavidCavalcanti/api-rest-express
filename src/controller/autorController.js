import mongoose from "mongoose";
import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res) {
    try {
      const todosAutores = await autor.find({});
      res.status(200).json(todosAutores);
    } catch (erro) {
      res.status(500).json({ message: `${erro}` });
    }
  }

  static async listaAutorId(req, res) {
    try {
      const { id } = req.params;
      const Autor = await autor.findById(id);
      if(Autor !== null){
        res.status(200).json({ message: "Autor econtrado:", Autor });
      }else{
        res.status(404).json({ message: "ID do autor não localizado." });
      }            
    } catch (erro) {
      if(erro instanceof mongoose.Error.CastError) { // exige conhecimento espcífico em mongoose
        res.status(400).json({message: "Um ou mais dados fornecidos estão incorretos"});
      }else {
        res.status(500).json({message: "Erro interno de servidor"});
      }
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Operação bem sucedida!", autor: novoAutor });
    } catch (erro) {
      res.status(500).json({ message: `${erro} - Falha ao cadastrar autor(a).` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const { id } = req.params;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atualização feita com sucesso!" });
    } catch (erro) {
      res.status(500).json({ message: `${erro} - Falha ao atualizar autor(a).` });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const { id } = req.params;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor(a) excluído com sucesso!" });
    } catch (erro) {
      res.status(500).json({ message: `${erro} - falha na exclusão` });
    }
  }
}

export default AutorController;