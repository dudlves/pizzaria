const express = require('express');
const app = express();
const PizzasRouter = require('./routes/PizzasRouter')

const porta = 3000;

app.get('/', (req,res) => {
    res.send("Olá, visitante!")
    console.log("Servidor rodando na porta 3000")
})

app.listen(porta)