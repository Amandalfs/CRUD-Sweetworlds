const express = require('express');
const port = 8020;
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{ res.send('<h1>Bem vindo ao Crud do SweetWorld<h1/>')});

app.listen(port, ()=>{
    console.log("Servidor rodando cheio de docinho");
})