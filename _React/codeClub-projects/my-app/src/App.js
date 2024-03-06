import React from "react"
import ImgPeople from './assets/image-bg_people.svg';
import ArrowRight from './assets/arrow-right.svg';


import {
  Container, Image,
  ContainerItens,
  H1, InputLabel,
  Input, Button,
} from "./styles"

const App = () => {

  return (
    <Container >
      <Image alt="logo-imagem" src={ImgPeople} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome:</InputLabel>
        <Input placeholder="Digite seu nome!"></Input>
        <InputLabel>Idade:</InputLabel>
        <Input placeholder="Digite sua Idade!"></Input>
        <Button>Cadastrar<img alt="arrow" src={ArrowRight} /> </Button>
      </ContainerItens>
    </Container>
  );

}

export default App