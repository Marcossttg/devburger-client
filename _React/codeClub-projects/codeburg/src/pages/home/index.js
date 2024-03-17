
import React, { useState, useRef } from 'react';
import axios from 'axios';

import ImgBurg from '../../assets/img/burger-1.svg';
import { H2 } from '../../components/Title/styles';
import { Button } from '../../components/Button/styles';


//TIRAR 
import ImgLixeira from '../../assets/img/img-lixeira.svg';
//ate aki-----

import {
  Image,
  Container,
  ContainerItens,
  P,
  Input,

  /* tirar----- */
  OrderList,
  ParagraphOrder,
  /* ate aki--- */

} from './styles'

const App = () => {

  //add react hooks {useState}
  const [requests, setRequests] = useState([]);
  const InputOrder = useRef()
  const InputName = useRef()

  async function addNewRequest() {

    const data = await axios.post("http://localhost:3001/desafio-burge.js", {
      order: InputOrder.current.value,
      name: InputName.current.value
    });

    console.log(data)

    // setRequests([...requests, {
    //   id: Math.random(),
    //   order: InputOrder.current.value,
    //   name: InputName.current.value,
    // }]);
  }

  function DeleteOrder(requestId) {
    const newRequest = requests.filter(request => request.id !== requestId);

    setRequests(newRequest)
    console.log(newRequest);
  }


  return (
    <Container>
      <Image alt="logo da hamburgueria" src={ImgBurg} />
      <ContainerItens>
        <H2>Faça seu pedido!</H2>

        <P>Pedido</P>
        <Input ref={InputOrder} placeholder='Digite seu Pedido' />

        <P>Nome do Cliente</P>
        <Input ref={InputName} placeholder='Digite seu Nome' />

        <Button onClick={addNewRequest} >
          <P>Novo Pedido</P>
        </Button>


        {/* TIRAR ESTA PARTE----- */}
        <ul>
          {requests.map((request) => (
            <OrderList key={request.id}>
              <div>
                <ParagraphOrder>{request.order}</ParagraphOrder>
                <P>{request.name}</P>
              </div>
              <button>
                <img onClick={() => DeleteOrder(request.id)} alt='imagem de uma lixeira' src={ImgLixeira} />
              </button>
            </OrderList>
          ))}
        </ul>
        {/* ate aki-------- */}


      </ContainerItens>
    </Container>
  );
}

export default App;
