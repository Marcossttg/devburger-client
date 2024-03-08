//Add react hooks ou ferramentas auxiliares
import React, { useState, useRef, useEffect } from "react";
//add axios api para acessar outra api 
import axios from 'axios';

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

  // const users = [];
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();

  // const [name, setName] = useState();
  // const [age, setAge] = useState();

  //add novo user c/ React Hooks
  async function addNewUser() {
    const { data: newUsers } = await axios.post("http://localhost:3001/projectNode-01", {
      name: inputName.current.value,
      age: inputAge.current.value
    })
    setUsers([...users, newUsers]);

  }

  useEffect(() => {   //React Hook => com useEffect (Efeito Colateral)
    //A minha aplicação inicia ( Quando a pagina e carregado, o useEffect é chamado)
    //Quando um estado que está no array de dependencia do useEffect é alterado 
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/projectNode-01");

      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  //deleta user utilizando filter
  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/projectNode-01/${userId}`);

    const newUsers = users.filter(user => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container >
      <Image alt="logo-imagem" src={ImgPeople} />

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome!" />

        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Digite sua Idade!" />

        <Button onClick={addNewUser}>
          Cadastrar<img alt="arrow" src={ArrowRight} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
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