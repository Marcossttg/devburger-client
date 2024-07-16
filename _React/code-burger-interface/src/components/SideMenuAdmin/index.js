import React from "react";

import LogoutIcon from '@mui/icons-material/Logout';
import { Container, ItemContainer, ListLinks } from "./styles";
import listLinks from "./menu-list.";
import { useUser } from "../../hooks/UserContext";
import PropTypes from "prop-types";

export function SideMenuAdmin({ path }) {
	const { logout } = useUser
	return (
		<Container>
			<hr></hr>
			{listLinks.map(item => (
				<ItemContainer key={item.id} isActive={path === item.link}>
					<item.icon className="icon" />
					<ListLinks to={item.link}>{item.label}</ListLinks>
				</ItemContainer>
			))}

			<hr></hr>
			<ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
				<LogoutIcon style={{ color: 'FFFFFF' }} />
				<ListLinks to="/login" onClick={logout}>Sair</ListLinks>
			</ItemContainer>
		</Container>
	)
}

SideMenuAdmin.propTypes = {
	path: PropTypes.string
}
