const express = require("express");

const app = express();

const port = 4100;

/* 
    -Query params => 'nomeSite.com' Ou 'localhost'/users?name=Marcos&age=28 //filtros mostrado na URL
    -Route params => /users/2  //Buscar, deletar ou atualizar algo específico tipo Id
*/

/*  //Com Query params.
 app.get("/users", (request, response) => {
    // const name = request.query.name   //Query params
    // const age = request.query.age    //Query  p/

    const { name, age } = request.query; //Destructuring assignment. Uma forma de extrair dados de um Array ou Object em variáveis distintask.

    console.log(request.query)

    return response.json({ name, age });
}); 
*/


//Com Route params.
//Dentro do get no endereço, colocamos o que queremos buscar de específico. Tipo assim '/users:id'
app.get("/users:id", (request, response) => {
    const { id } = request.params; //Tbm podemos pegar o 'id' que esta dentro do 'request.params', e chamar no console.log.. Que inprimirar o Id indicado 
    console.log(id)

    return response.json(id); //Tbm podemos retornar o Id como um objeto JSON, que mostrará na tela.  
    //return response.send("Hello Node!");
});

app.listen(port, () => {
    console.log(`☕ Server started.`)
});