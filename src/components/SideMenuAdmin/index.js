import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list.'
import { Container, ItemContainer, ListLinks } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser
  return (
    <Container>
      <hr />
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLinks to={item.link}>{item.label}</ListLinks>
        </ItemContainer>
      ))}

      <hr />
      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon style={{ color: 'FFFFFF' }} />
        <ListLinks to="/login" onClick={logout}>
          Sair
        </ListLinks>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string,
}
