const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

const uuid = require("uuid");//Instalado appi que cria id único.
const port = 3001;

const users = [];

//Pegando informação do site '/projectNode-01' e retornando para users 
app.get("/projectNode-01/", (request, response) => {
    return response.json(users);
});

//Pegando iformação do body e retornando para user
app.post("/projectNode-01/", (request, response) => {
    const { name, age } = request.body; //pega o que for digitado no body

    const user = { id: uuid.v4(), name, age };//aqui o 'uuid.v4()'vai adicionar um id unico para esse user

    users.push(user); //enviando user para users

    return response.status(201).json(user);
})

app.put("/projectNode-01/:id", (request, response) => {
    const { id } = request.params;
    const { name, age } = request.body;

    const updatedUser = { id, name, age };

    const index = users.findIndex(user => user.id === id);
    console.log(index)

    if (index < 0) {
        return response.status(404).json({ message: "User not found" });
    }

    users[index] = updatedUser;
    return response.json(updatedUser);
})

app.delete("/projectNode-01/:id", (request, response) => {
    const { id } = request.params;

    const index = users.findIndex(user => user.id === id);

    if (index < 0) {
        return response.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);

    return response.status(204).json();
})

app.listen(port, () => {
    console.log(`💻 Server starte on port ${port}`);
})

