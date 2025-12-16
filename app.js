import express from "express"; //Importo express 

const app = express(); //Invoco express
const port = 30002; //Creo una porta 3002

app.listen(port, function () {
    console.log("Il server è in ascolto sulla porta " + port);
})