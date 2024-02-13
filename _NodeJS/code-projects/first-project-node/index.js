

//--Query params => 'nomeSite.com' Ou 'localhost'/users?name=Marcos&age=28 //filtros mostrado na URL
//--Route params => /users/2  //Buscar, deletar ou atualizar algo específico tipo Id
//--Body params => {"name":"Marcos", "age":}  //Pega dados do Body e transforma, em JSON.
//--Middlewares => Interceptador => tem o poder de parar ou alterar dados da requisição.


/*
//Com Get params.//
const express = require("express");
const port = 4100;
const app = express();
app.use(express.json()); //Adicionando o padrão do json no expresss. Sempre adicionar no topo do projeto já que a leitura do codigo e feita de cima para baixo.

app.get("/users", (request, response) => {
    //console.log(request.body)
    const { name, age } = request.body; //Body params

    return response.json({ name, age });
    //return response.json({ message: "Hello!" });
})

app.listen(port, () => {
    console.log(`☕ Server on`);
})
*/

/*
const express = require("express");
const port = 4100;
const app = express();

                //Com Query params.//
    app.get("/users", (request, response) => {
        // const name = request.query.name   //Query params
        // const age = request.query.age    //Query  p/

        const { name, age } = request.query; //Destructuring assignment. Uma forma de extrair dados de um Array ou Object em variáveis distintask.

        console.log(request.query)

        return response.json({ name, age });
    });

    app.listen(port, () => {
     console.log(`☕ Server started.`)
    });
*/


/*

const express = require("express");
const port = 4100;
const app = express();

            //Com Route params.//
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
*/

//Com Middlewares params.//
const express = require("express");
const app = express();
app.use(express.json());
const uuid = require("uuid");//Instalado appi que cria id único.
const port = 4100;


const users = [];

//Utilizando Middlewares
const checkUserId = (request, response, next) => {
    const { id } = request.params;

    const index = users.findIndex(user => user.id === id);

    if (index < 0) {
        return response.status(404).json({ message: "User not found" });
    }

    request.userIndex = index;
    request.userId = id;

    next();
};

//Pegando informação do site '/projectNode-01' e retornando para users 
app.get("/users/", (request, response) => {
    return response.json(users);
});

//Pegando iformação do body e retornando para user
app.post("/users/", (request, response) => {
    const { name, age } = request.body; //pega o que for digitado no body

    const user = { id: uuid.v4(), name, age };//aqui o 'uuid.v4()'vai adicionar um id unico para esse user

    users.push(user); //enviando user para users

    return response.status(201).json(user);
})

app.put("/users/:id", checkUserId, (request, response) => {
    const { name, age } = request.body;
    const index = request.userIndex;
    const id = request.userId;
    const updatedUser = { id, name, age };

    users[index] = updatedUser;
    return response.json(updatedUser);
})

app.delete("/users/:id", checkUserId, (request, response) => {
    const index = request.userIndex;
    users.splice(index, 1);

    return response.status(204).json();
})

app.listen(port, () => {
    console.log(`💻 Server started.`);
})
