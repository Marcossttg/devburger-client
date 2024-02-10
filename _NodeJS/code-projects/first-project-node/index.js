const express = require("express");
const port = 4100;
const app = express();
app.use(express.json()); //Adicionando o padrão do json no expresss. Sempre adicionar no topo do projeto já que a leitura do codigo e feita de cima para baixo.

//--Query params => 'nomeSite.com' Ou 'localhost'/users?name=Marcos&age=28 //filtros mostrado na URL
//--Route params => /users/2  //Buscar, deletar ou atualizar algo específico tipo Id
//--Body params => {"name":"Marcos", "age":}  //Pega dados do Body e transforma, em JSON. 

app.get("/users", (request, response) => {
    //console.log(request.body)
    const { name, age } = request.body; //Body params

    return response.json({ name, age });
    //return response.json({ message: "Hello!" });
})

app.listen(port, () => {
    console.log(`☕ Server on`);
})

/* 
const express = require("express");
const port = 4100;
const app = express();

    //--Query params => 'nomeSite.com' Ou 'localhost'/users?name=Marcos&age=28 //filtros mostrado na URL
    //--Route params => /users/2  //Buscar, deletar ou atualizar algo específico tipo Id
    //--Body params => {"name":"Marcos", "age":}  //Pega dados do Body e transforma, em JSON. 
    
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
 
//--Query params => 'nomeSite.com' Ou 'localhost'/users?name=Marcos&age=28 //filtros mostrado na URL
//--Route params => /users/2  //Buscar, deletar ou atualizar algo específico tipo Id
//--Body params => {"name":"Marcos", "age":}  //Pega dados do Body e transforma, em JSON. 
 
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