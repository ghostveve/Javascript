//importe o express
import express from "express";

const app = express();
const PORT = 3000;

// Middleware para definir o cabeçalho da resposta como HTML 
app.use ((req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    next();
});
 // roteamento basico
 app.get("/", (req, res) => {
    res.status(200).send("<h1> Pagina inicial. </h1>");
});

    app.get("/sobre", (req, res) => {
    res.status(200).send("<h1> Pagina sobre. </h1>");
});

    app.get("/contato", (req, res) => {
    res.status(200).send("<h1> Pagina contato. </h1>");
});

    app.get("*", (req, res) => {    
    res.status(404).send("<h1> fotos. </h1>");   
});

//rota para lidar com páginas não encontradas (404)
app.use((req, res) => {
    res.status(404).send("<h1> 404 - Página não encontrada. </h1>");
});

//inicia o servidor para ouvir na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});