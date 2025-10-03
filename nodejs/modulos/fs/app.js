//importando o modulo fs (file system)
//const fs = require('fs');
import fs from 'fs';

//lendo um arquivo de forma assincronada
fs.readFile('exempl.txt', 'utf8', (erro, dados) => {
    //tratando erro
  if (erro) {
    //adicionando erro no console
    console.error('Erro ao ler o arquivo:', erro);
    //retornando erro para nao continuar a executar no console.log abaixo
    return;
  }
  // se nao houver  erro, exibimos o conteudo do arquivo
  console.log('Conteúdo do arquivo:', dados);
});

//imprimindo uma mensagem antes da leitura do arquivo
console.log('esta mensagem aparece primeiro.');