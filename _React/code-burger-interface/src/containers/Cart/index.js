import React from "react";

import CartLogo from "../../assets/cart-img.svg"
import { Container, CartImg } from "./styles";
import { CartItems } from "../../components";


export function Cart() {
	return (
		<Container>
			<CartImg src={CartLogo} alt="imagem do carrinho de compras" />
			<CartItems />
		</Container>
	)
}
