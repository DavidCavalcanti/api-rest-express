import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const livrosResultado = await livro.find();
            res.status(200).json(livrosResultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.boby);
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro} - falha ao cadastrar livro` });
        }
    }

};

export default LivroController;
