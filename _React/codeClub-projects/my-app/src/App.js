import React from "react"
import ImgPeople from './assets/image-bg_people.svg';
import ArrowRight from './assets/arrow-right.svg';
import ImgLixeira from './assets/img-lixeira.svg';

import {
  Container, Image,
  ContainerItens,
  H1, InputLabel,
  Input, Button,
  User,
} from "./styles"

const App = () => {

  const users = [
    { id: Math.random(), name: "Pedro", age: 29 },
    { id: Math.random(), name: "Maria", age: 20 },
  ]

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
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button>
                <img src={ImgLixeira} />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );

}

export default App