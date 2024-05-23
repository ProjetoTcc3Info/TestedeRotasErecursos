
const express = require('express')


const ServMestre = express()

ServMestre.get('/',(req, res) =>{
    
    console.log('Fui requisitado')

     return res.send('Minha resposta - servidor rota Mestre')
} )

ServMestre.get('/produtos', (req, res)=>{
  
    console.log('Fui requisitado nos Produtos')

    return res.send('Minha resposta - servidor rota Produtos')

})

ServMestre.listen( 3344,()=> console.log('Servidor Ligado na porta 3344, to rodando certinho por hora'))


