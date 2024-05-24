
//esse é o arquivo que vai manejar as rotas no pelas paginas, denovo, fazer essa merda é bem mais facil no react

//imports
const express = require('express');
const ControProdu = require('./ControlProdutos/CtrlProd')
//


const rotas = express.Router();

rotas.get('/', ControProdu.Raiz   );

rotas.get('/produtos', ControProdu.Produtos)

rotas.get('/Monstros', ControProdu.EscondidonãoEscondido )

module.exports = rotas ; 