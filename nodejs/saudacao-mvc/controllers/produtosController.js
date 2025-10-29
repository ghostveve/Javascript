module.exports = {

    Produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views' })
    },

    Camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views' })
    }
};