//Carregar a biblioteca do Express
const express = require('express');

///Inicializando a biblioteca
const app = express();

//Rota padrão no navegador para exibir um Hello Word
app.get('/', (req, res) => {
    res.send("Olá, eu sou uma aplicação NodeJS!")
})

//Executar o servidor da aplicação
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});