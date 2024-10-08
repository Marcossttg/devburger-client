import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="imagem de um hamburger" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
