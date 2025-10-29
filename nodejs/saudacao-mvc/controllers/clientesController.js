module.exports = {

    Clientes: (req, res) => {
    res.sendFile('clientes.html', { root: './views' })
    }

    cadastro: (req,res) => {
    res.sendFile('cadastro.html', { root: './views' })  
    }

    login:(req,res) => {
    const {login, senha} = req.body;
    const mensagem = clientesModel.gerarMensagemLogin(login, senha);
    res.send(`<h1>${mensagem}</h1>`);
    }
};