import express, { request, response } from 'express';

const app = express();

/**
 * tipos de verbos http
 * get ===> Buscar uma informação no servidor/api
 * post ===> Inserir(CRIAR) um ainformação
 * put ===> Alterar uma informação
 * delete ===> Remover uma dado
 * patch ===> Alterar uma informação específica 
 */

app.get("/test", (request, response) => {
    //request: o que entra
    //response: o que saí 
    return response.send("Olá nlw");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW POST VERB")
})

//http://localhost:3000

app.listen(3000, () => console.log("sesrver is running"))