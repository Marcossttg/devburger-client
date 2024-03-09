//Add react hooks ou ferramentas auxiliares
import React, { useState, useEffect } from "react";

import axios from 'axios';

import ImgPeople01 from '../../assets/image-bg_people-01.svg';
import ArrowLeft from '../../assets/arrow-left.svg';
import ImgLixeira from '../../assets/img-lixeira.svg';

import {
  Container, Image,
  ContainerItens,
  H1, Button,
  User,
} from "./styles"

const Users = () => {
  // const users = [];
  const [users, setUsers] = useState([]);

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
      <Image alt="logo-imagem" src={ImgPeople01} />
      <ContainerItens>
        <H1>Usuários</H1>

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

        <Button >
          <img alt="arrow" src={ArrowLeft} />Voltar
        </Button>

      </ContainerItens>
    </Container>
  );

}

export default Users