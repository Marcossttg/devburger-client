
import React, { useState, useRef } from 'react';
import axios from 'axios';

import ImgBurg from '../../assets/img/burger-1.svg';
import { H2 } from '../../components/Title/styles';
import { Button } from '../../components/Button/styles';

import {
  Image,
  Container,
  ContainerItens,
  P,
  Input,
} from './styles'

const App = () => {
  //add react hooks {useState}
  const [requests, setRequests] = useState([]);
  const InputOrder = useRef()
  const InputName = useRef()

  //add novo pedido
  async function addNewRequest() {
    const { data: newRequest } = await axios.post("http://localhost:3001/desafio-burge.js", {
      order: InputOrder.current.value,
      name: InputName.current.value
    });

    setRequests([...requests, newRequest]);

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

      </ContainerItens>
    </Container>
  );
}

export default App;
