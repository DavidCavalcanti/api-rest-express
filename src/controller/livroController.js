import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const livrosResultado = await livro.find();
            res.status(200).json(livrosResultado)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }
    }

    static async listarLivroID(req, res) {
        try {
            const id = req.params.id;
            const Livro = await livro.findById(id);
            res.status(200).json({ message: "Livro encontrado!", Livro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição do livro` });
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Criado com sucesso", livro: livroCriado });
        } catch (erro) {
            res.status(500).json({ message: `${erro} - falha ao cadastrar livro` });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const { id } = req.params;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro} - falha na atualização` });
        }
    }

    static async deletarLivro(req, res) {
        try {
            const { id } = req.params
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluído com sucesso!" })
        } catch (Erro) {
            res.status(500).json({ message: `${erro} - falha na exclusão` });
        }
    }

};

export default LivroController;
