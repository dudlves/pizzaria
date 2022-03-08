const express = require('express');
const path = require('path')
const app = express();
const porta = 3000;
const PizzaRouter = require('./routes/PizzasRouter')
app.get('/', (req,res) => {
    res.send("Olá, visitante!")
    console.log("Servidor rodando na porta 3000")
})
app.set('view enrige','ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', PizzaRouter)

app.listen(porta)

