const Pizzas = {
    listar: (req,res) =>{
        res.render('pizzas.ejs',{pizzas,busca:''})
    },
    mostrar:(req,res) =>{
        let idProxima;
        let idAnterior;
        let id = req.params.id;
        // let pizza = pizzas.find(p => p.id == id);
        // res.render('pizza.ejs',{pizza});
        let posicao = pizzas.findIndex(p => p.id == id);
        let pizza = pizzas[posicao];
        if(posicao == pizzas.length - 1){
            idProxima = pizzas[0].id
        } else {
            idProxima = pizzas[posicao + 1].id;
        }
        if(posicao == 0){
            idAnterior = pizzas[pizzas.length - 1].id;
        } else {
            idAnterior = pizzas[posicao - 1].id;
        }
        res.render('pizza.ejs',{pizza, idAnterior, idProxima});
    },
    buscar: (req,res) =>{
       let busca = req.query.q;
       if (busca){
           let result = pizzas.filter(p => p.nome.toUpperCase().includes(busca.toUpperCase()));
           return res.render('../views/pizzas.ejs', { pizzas: result,busca});
       }else{
           return res.redirect('/');
       }
        
    }
};




const pizzas = require('../database/Pizzas.json')
module.exports = Pizzas