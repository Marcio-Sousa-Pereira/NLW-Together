import "reflect-metadata";
import express from 'express';
import { router } from './routes';

const app = express();

/**
 * tipos de verbos http
 * get ===> Buscar uma informação no servidor/api
 * post ===> Inserir(CRIAR) um ainformação
 * put ===> Alterar uma informação
 * delete ===> Remover uma dado
 * patch ===> Alterar uma informação específica 
 */

/**
 * Tipo de parâmetros para requisição
 * Routes params ===> http://localhost:3000/produtos/45455
 * Query params ===> http://localhost:3000/produtos?name=teclado&description=tecladoAzul
 * 
 * body params ===> vem no corpo de request ==> 
 * body { 
 *  "name": "teclado",
 *  "descrtiption": "teclado logitech"
 * }
 */

import "./database";

// app.get("/test", (request, response) => {
//     //request: o que entra
//     //response: o que saí 
//     return response.send("Olá nlw");
// });

// app.post("/test-post", (request, response) => {
//     return response.send("Olá NLW POST VERB")
// })

// //http://localhost:3000

app.use(express.json())
app.use(router);

app.listen(3000, () => console.log("sesrver is running"))