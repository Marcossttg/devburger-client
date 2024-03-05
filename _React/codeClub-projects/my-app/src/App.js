import React from "react"

import {
  Container, Image,
  ContainerItens,
  H1, InputLabel,
  Input, Button,
} from "./styles"

const App = () => {

  return (
    <Container >
      <Image></Image>
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome:</InputLabel>
        <Input placeholder="Digite seu nome!"></Input>
        <InputLabel>Idade:</InputLabel>
        <Input placeholder="Digite sua Idade!"></Input>
        <Button>Cadastrar</Button>
      </ContainerItens>
    </Container>
  );

}

export default App