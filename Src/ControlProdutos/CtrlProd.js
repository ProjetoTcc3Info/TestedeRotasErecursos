//exportação dos parametros que vão ser usados no routes, é que nem fazer parametro pra componente no react
//mas sinceramente no react fazer isso tudo é mais facil

module.exports={
 
     async Raiz(req, res){
        
        const resultado = await console.log('Fui requisitado')

        return res.send('Minha resposta - servidor rota Mestre')
    
     },

     async Produtos(req, res){
   
        const resultado = await console.log('Fui requisitado nos Produtos')

    return res.send('Minha resposta - servidor rota Produtos')
     },

    
     async EscondidonãoEscondido(req,res){
        const resultado = await console.log('fui requisitado no escondido? como você sabe desse lugar?')
        return res.send('amigo como você chegou aqui?')
     }
}

/*
 parada antiga que tava no server
ServMestre.get('/',(req, res) =>{
    
    console.log('Fui requisitado')

    return res.send('Minha resposta - servidor rota Mestre')

} )

ServMestre.get('/produtos', (req, res)=>{
  
    console.log('Fui requisitado nos Produtos')

    return res.send('Minha resposta - servidor rota Produtos')

})

*/
