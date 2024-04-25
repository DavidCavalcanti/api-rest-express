import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function erros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) { // exige conhecimento espcífico em mongoose
    res.status(400).json({ message: "Um ou mais dados fornecidos estão incorretos" });
  } else if(erro instanceof mongoose.Error.ValidationError) {
    const mensagemErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");
    res.status(400).send({message: `Os seguintes erros foram encontrados: ${mensagemErro}}`});
  }else {
    res.status(500).json({ message: "Erro interno de servidor" });
  }
}

export default erros;
