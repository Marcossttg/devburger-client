import React from "react";

import HomeLogo from "../../assets/home-logo.svg"
import { Container, HomeImg } from "./styles";
import {
	CategoryCarousel,
	OffersCarousel
} from "../../components";


export function Home() {
	return (
		<Container>
			<HomeImg src={HomeLogo} alt="imagem de um hamburger" />
			<CategoryCarousel></CategoryCarousel>
			<OffersCarousel></OffersCarousel>
		</Container>
	)
}
