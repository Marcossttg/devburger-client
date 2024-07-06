import React from "react";

import { useHistory } from "react-router-dom"

import Person from "../../assets/person.svg";
import Cart from "../../assets/cart.svg";
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText
} from "./styles";


export function Header() {
  const {
    push,
    location: { pathname }
  } = useHistory()

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push("/")} isActive={pathname === '/'} >Home</PageLink>
        <PageLink
          onClick={() => push("/produtos")}
          isActive={pathname.includes('produtos')}
        >Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Cart} onClick={() => push("/carrinho")} alt="Carrinho icone de compras" />
        </PageLink>
        <div className="line"></div>
        <PageLink>
          <img src={Person} alt="Imagem icone de pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá, Marcos</p>
          <PageLink className="exit">Sair</PageLink>
        </ContainerText>
      </ContainerRight>

    </Container>
  );
}
