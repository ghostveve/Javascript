//importando o módulo http nativo do Node.js
import http from 'http';
const PORT = 3000;

//criando o servidor
const server = http.createServer((request, response) => {
   const { method, url } = request;
   
    //definindo o cabaçalho da resposta como HTML
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    //roteamento básico
    if (url === '/') {
        response.statusCode = 200; //OK
        response.end('<h1> Página inicial </h1>');

    } else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200; //OK
        response.end('<h1> Sobre Nós</h1><p> Esta é a uma aplicação Node.js puro. </p>');

    } else if (url === '/contato' && method === 'GET') {
        response.statusCode = 200; //OK
        response.end('<h1> Fale conosco </h1>');

        } else {
            //se nenhuma rota corresponder
            response.statusCode = 404; //Not Found
            response.end('<h1> 404 - Página não encontrada </h1>');
        }
});

        //iniciando o servidor
        server.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });

        
