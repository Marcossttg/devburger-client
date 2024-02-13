/* 
Crie uma aplicação que fará o cadastro dos pedidos de uma hamburgueria, e você deve utilizar Node e Express.

Rotas
POST /order: A rota deve receber o pedido do cliente, o nome do cliente e o valor do pedido, essas informações devem ser passadas dentro do corpo(body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no seguinte formato: { id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status:"Em preparação" }. Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4, assim que o pedido é criado, você deve sempre colocar o status como "Em preparação".

GET /order: Rota que lista todos os pedidos já feitos.

PUT /order/:id: Essa rota deve alterar um pedido já feito. Pode alterar,um ou todos os dados do pedido.O id do pedido deve ser enviado nos parâmetros da rota.

DELETE /order/:id: Essa rota deve deletar um pedido já feito com o id enviado nos parâmetros da rota.

GET /order/:id: Essa rota recebe o id nos parâmetros e deve retornar um pedido específico.

PATCH /order/:id: Essa rota recebe o id nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto".
 */

const express = require("express");
const app = express();
app.use(express.json());
const uuid = require("uuid");
const port = 4001;

const purchaseOrders = [];

//Crie um middleware que será utilizado em todas rotas que recebem o parâmetro ID, então ele deve verificar se o ID passado existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;
const checkOrderId = (request, response, next) => {

    const { id } = request.params;

    const index = purchaseOrders.findIndex(order => order.id === id);

    if (index < 0) {
        return response.status(404).json({ Error: "Order not found!" });
    }

    request.orderIndex = index;

    request.orderId = id;

    next();
}

//Crie um middleware que é chamado em todas requisições que tenha um console.log que mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.
const checkMethod = (request, response, next) => {

    const showMethod = request.method;

    const showUrl = request.url;

    console.log(`Utilizando o método: ${showMethod} \nCom o endereço da URL: ${showUrl}`);

    next()
}

//GET /order: Rota que lista todos os pedidos já feitos.
app.get("/desafio-burge.js", checkMethod, (request, response) => {

    return response.json(purchaseOrders);
})

///* POST /order: A rota deve receber o pedido do cliente
app.post("/desafio-burge.js", checkMethod, (request, response) => {

    const { order, clienteName, price } = request.body;

    const status = "Em preparação";

    const orderItem = { id: uuid.v4(), order, clienteName, price, status };

    purchaseOrders.push(orderItem);

    return response.status(201).json(orderItem);
})

//PUT /order/:id: Essa rota deve alterar um pedido já feito. Pode alterar,um ou todos os dados do pedido.O id do pedido deve ser enviado nos parâmetros da rota.
app.put("/desafio-burge.js/:id", checkOrderId, checkMethod, (request, response) => {

    const id = request.orderId;

    const index = request.orderIndex;

    const { order, clienteName, price, status } = request.body;

    const updateOrder = { id, order, clienteName, price, status };

    purchaseOrders[index] = updateOrder

    return response.json(updateOrder);
})

//DELETE /order/:id: Essa rota deve deletar um pedido já feito com o id enviado nos parâmetros da rota.
app.delete("/desafio-burge.js/:id", checkOrderId, checkMethod, (request, response) => {

    const index = request.orderIndex;

    purchaseOrders.splice(index, 1);

    return response.status(204).json();
})

//GET /order/:id: Essa rota recebe o id nos parâmetros e deve retornar um pedido específico.
app.get("/desafio-burge.js/:id", checkOrderId, checkMethod, (request, response) => {

    const index = request.orderIndex

    return response.status(202).json(purchaseOrders[index])
})

// PATCH /order/:id: Essa rota recebe o id nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto". 
app.patch("/desafio-burge.js/:id", checkOrderId, checkMethod, (request, response) => {

    const id = request.orderId;

    const index = request.orderIndex;

    const { order, clienteName, price, status } = request.body;

    const updateStatus = { id, order, clienteName, price, status: "Pronto" };

    purchaseOrders[index] = updateStatus;

    return response.status(202).json(updateStatus);
})

app.listen(port, () => {
    console.log(`💻 Server started.`);
})
