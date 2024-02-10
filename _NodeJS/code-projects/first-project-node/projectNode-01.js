const express = require("express");
const uuid = require("uuid");//Instalado appi que cria id único.
const port = 4100;
const app = express();

app.use(express.json())

const users = [];

//Pegando informação do site '/projectNode-01' e retornando para users 
app.get("/projectNode-01", (request, response) => {
    return response.json(users);
});

//Pegando iformação do body e retornando para user
app.post("/projectNode-01", (request, response) => {
    const { name, age } = request.body; //pega o que for digitado no body

    const user = { id: uuid.v4(), name, age };//aqui o 'uuid.v4()'vai adicionar um id unico para esse user

    users.push(user); //enviando user para users

    return response.status(201).json(user);

})

app.listen(port, () => {
    console.log(`💻 Server started.`);
})

