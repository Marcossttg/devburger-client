import React from "react";

import CartLogo from "../../assets/cart-img.svg"
import { Container, CartImg, Wrapper } from "./styles";
import { CartItems, CartResume } from "../../components";


export function Cart() {
	return (
		<Container>
			<CartImg src={CartLogo} alt="imagem do carrinho de compras" />
			<Wrapper>
				<CartItems />
				<CartResume />
			</Wrapper>
		</Container>
	)
}
