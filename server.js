const express = require ("express");
const routes = require("./routes");
const app = express();

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const porta = 3000

app.listen(porta, ()=>{
    console.log("Servidor Funcionando!!!")
})