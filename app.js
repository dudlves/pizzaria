const express = require('express');
const app = express();
const porta = 3000;
const PizzaRouter = require('./routes/PizzasRouter')
app.get('/', (req,res) => {
    res.send("Olá, visitante!")
    console.log("Servidor rodando na porta 3000")
})
app.use('/', PizzaRouter)

app.listen(porta)