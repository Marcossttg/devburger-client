import React from 'react';
import ImgBurg from '../../assets/img/burger-1.svg';
import ImgLixeira from '../../assets/img/img-lixeira.svg';

import { H2 } from '../../components/Title/styles';
import { Button } from '../../components/Button/styles';

import {
  Image,
  Container,
  ContainerItens,
  P,
  Input,
  OrderList,
  ParagraphOrder
} from './styles'

const App = () => {

  const requests = [
    { id: Math.random(), order: "X- Salada, 1 coca-cola, 2 batatas grandes, 2 batatas grandes", clienteName: "Mario" },
    { id: Math.random(), order: "2 batatas grandes", clienteName: "Maria" },
  ];


  return (
    <Container>
      <Image alt="logo da hamburgueria" src={ImgBurg} />
      <ContainerItens>
        <H2>Faça seu pedido!</H2>
        <P>Pedido</P>
        <Input placeholder='Digite seu Pedido' />
        <P>Nome do Cliente</P>
        <Input placeholder='Digite seu Nome' />
        <Button><P>Novo Pedido</P></Button>

        <ul>
          {requests.map((request) => (
            <OrderList key={request.id}>
              <div>
                <ParagraphOrder>{request.order}</ParagraphOrder>
                <P>{request.clienteName}</P>
              </div>
              <button><img alt='imagem de uma lixeira' src={ImgLixeira} /></button>
            </OrderList>
          ))}
        </ul>

      </ContainerItens>
    </Container>
  );
}

export default App;

/* 
app.post("/desafio-burge.js", checkMethod, (request, response) => {

    const { order, clienteName, price } = request.body;

    const status = "Em preparação";

    const orderItem = { id: uuid.v4(), order, clienteName, price, status };

    purchaseOrders.push(orderItem);

    return response.status(201).json(orderItem);
})

*/