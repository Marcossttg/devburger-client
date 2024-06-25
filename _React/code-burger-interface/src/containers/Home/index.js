import React from "react";

import HomeLogo from "../../assets/home-logo.svg"
import { Container, HomeImg } from "./styles";
import CategoryCarousel from "../../components/CategoryCarousel";
import OffersCarousel from "../../components/OffersCarousel";

function Home() {
	return (
		<Container>
			<HomeImg src={HomeLogo} alt="imagem de um hamburger" />
			<CategoryCarousel></CategoryCarousel>
			<OffersCarousel></OffersCarousel>
		</Container>
	)
}

export default Home