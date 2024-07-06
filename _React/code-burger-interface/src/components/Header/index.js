import React from "react";

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
  return (
    <Container>
      <ContainerLeft>
        <PageLink className="home">Home</PageLink>
        <PageLink>Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="Carrinho icone de compras" />
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
