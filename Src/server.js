
const express = require('express')
const rotas = require('./Rotas')


const ServGerent = express();

ServGerent.use( rotas);


ServGerent.listen( 3344,()=> console.log('Servidor Ligado na porta 3344, to rodando certinho por hora'));


//esse arquivo só tá aqui pra ligar o servidor, sem ele n roda porrra nenhuma, eu acho

