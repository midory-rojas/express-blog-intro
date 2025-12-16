import { tipiDiCani } from "./cani.js";
import express from "express"; //Importo express 


const app = express(); //Invoco express
const port = 3002; //Creo una porta 3002

app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("Server del mio blog"); 
    res.send("Server del mio blog"); //Verifica la risposta in postman
})

app.get("/bacheca", (req, res) => {  //Creazione della rotta /bacheca
    console.log(tipiDiCani);
    const risposta = {
        info: {
            total: tipiDiCani.length, //Totale della lista di oggeti
        },
        results: tipiDiCani, //Resultato dei tipi di cani
    };
    res.json(risposta);
})

app.listen(port, function () {
    console.log("Il server è in ascolto sulla porta " + port);
})