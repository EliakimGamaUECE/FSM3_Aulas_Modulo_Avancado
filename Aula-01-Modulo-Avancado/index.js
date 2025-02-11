// FAZER AS INTANCIAÇÕES
const express = require("express")
const app = express()
const PORT = 3000


//DEFINE MÉTODOS E ROTAS
app.get("/",(req, res)=>{
    res.send("Tudo certo!!!Uhuuuu")
})

//STARTAR O NOSSO PEQUENO SERVIDOR
app.listen(PORT,()=>{
    console.log(`O server está rodando em http://localhost:${PORT} `)
})