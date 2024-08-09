import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
} from './styles'

export function Header() {
  const { logout, userData } = useUser()

  const {
    push,
    location: { pathname },
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img
            src={Cart}
            onClick={() => push('/carrinho')}
            alt="Carrinho icone de compras"
          />
        </PageLink>
        <div className="line" />
        <PageLink>
          <img src={Person} alt="Imagem icone de pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLink className="exit" onClick={logoutUser}>
            Sair
          </PageLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
