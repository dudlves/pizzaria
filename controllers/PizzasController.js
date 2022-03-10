const Pizzas = {
    listar: (req,res) =>{
        res.render('pizzas.ejs',{pizzas})
    },
    mostrar: (req,res) =>{
        let id = req.params.id;
        let buscar = pizzas => {
            if (pizzas.id == id){
                return true;
            }else{
                false;
            }
        };
        const pizza = pizzas.find(buscar)
        res.render('pizza.ejs',{pizza})
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