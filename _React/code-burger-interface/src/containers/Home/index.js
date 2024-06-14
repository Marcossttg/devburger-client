import React from "react";

import HomeLogo from "../../assets/home-logo.svg"
import { Container, HomeImg } from "./styles";
import CategoryCarousel from "../../components/CategoryCarousel";

function Home() {
	return (
		<Container>
			<HomeImg src={HomeLogo} alt="imagem de um hamburger" />
			<CategoryCarousel></CategoryCarousel>
		</Container>
	)
}

export default Home