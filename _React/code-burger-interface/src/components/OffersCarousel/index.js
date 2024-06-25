import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel';

import Offers from "../../assets/offers.png";
import api from "../../services/api";
import { Container, CategoryImg, ContainerItems, Image, Button } from "./styles";

import formatCurrency from "../../utils/formatCurrency";

function OffersCarousel() {
	const [offers, setOffers] = useState([])

	useEffect(() => {
		async function loadOffers() {
			const { data } = await api.get("products")

			//Adicionando map para formatar o valor do produto para "R$"
			const onlyOffers = data.filter(product => product.offer).map(product => {
				return { ...product, formatedPrice: formatCurrency(product.price) }
			})

			console.log(data)

			setOffers(onlyOffers)

			console.log(onlyOffers)
		};

		loadOffers()
	}, [])

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 400, itemsToShow: 2 },
		{ width: 600, itemsToShow: 3 },
		{ width: 900, itemsToShow: 4 },
		{ width: 1300, itemsToShow: 5 },
	]


	return (
		<Container>
			<CategoryImg src={Offers} alt="logo de offers" />

			<Carousel itemsToShow={5} style={{ width: "90%" }} breakPoints={breakPoints} >
				{offers && offers.map(product => (
					<ContainerItems key={product.id} >
						<Image src={product.url} alt="foto do produto"></Image>
						<p>{product.name}</p>
						<p>{product.formatedPrice}</p>
						{/* <p>{formatCurrency(product.price)}</p> */} {/* outra forma de retornar o valor em "R$" */}
						<Button>Peça agora</Button>
					</ContainerItems>
				))}
			</Carousel>

		</Container>
	)
}

export default OffersCarousel