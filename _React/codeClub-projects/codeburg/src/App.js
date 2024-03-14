import React from 'react';
import ImgBurg from './assets/img/burger-1.svg'

import { H2 } from './components/Title/styles';
import { Container } from './styles';
import { ContainerItens } from './styles'
import { P } from './styles';
import { Button } from './components/Button/styles';

import {
  Image,
  Input,
} from './styles'

const App = () => {

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
      </ContainerItens>
    </Container>
  );
}

export default App;