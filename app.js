import { tipiDiCani } from "./cani.js";
import express from "express"; //Importo express 


const app = express(); //Invoco express
const port = 30002; //Creo una porta 3002

app.get("/", (req, res) => {
    console.log("Server del mio blog"); 
    res.send("Server del mio blog"); //Verifica la risposta in postman
})

app.listen(port, function () {
    console.log("Il server è in ascolto sulla porta " + port);
})