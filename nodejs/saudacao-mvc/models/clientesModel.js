module.exports = {

    gerarMensagemLogin: (login, senha) => {
        let acesso;

        if (login == "Leticia" && senha == "1234") {
            acesso = "Liberado";
        } else {
            acesso = "Negado";
        }

        return `Olá, ${login}! Seu acesso foi ${acesso}.`;
    }
};