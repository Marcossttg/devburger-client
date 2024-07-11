import React from "react";

import { Container, ItemContainer, ListLinks } from "./styles";
import listLinks from "./menu-list.";

export function SideMenuAdmin() {

	return (
		<Container>
			<hr></hr>
			{listLinks.map(item => (
				<ItemContainer key={item.id}>
					<item.icon className="icon" />
					<ListLinks to={item.link}>{item.label}</ListLinks>
				</ItemContainer>
			))}

			<hr></hr>
		</Container>
	)
}
