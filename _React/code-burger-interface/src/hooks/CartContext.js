import React, { createContext, useContext, useState, useEffect } from "react"

import PropTypes from "prop-types"

const CardContext = createContext({})

export const CartProvider = ({ children }) => {
	const [cartProduts, setCartProducts] = useState([])

	//adicionando produtos
	const putProductInCart = async product => {
		console.log(product)
		const cartIndex = cartProduts.findIndex(prd => prd.id === product.id)

		let newCartProdutcts = []
		if (cartIndex >= 0) {

			newCartProdutcts = cartProduts

			newCartProdutcts[cartIndex].quantity =
				newCartProdutcts[cartIndex].quantity + 1

			setCartProducts(newCartProdutcts)
		} else {
			product.quantity = 1
			newCartProdutcts = [...cartProduts, product]
			setCartProducts(newCartProdutcts)
		}
		//gravando no local storage
		await localStorage.setItem("codeburger:cartInfo", JSON.stringify(newCartProdutcts))
	}

	useEffect(() => {
		const loadUserData = async () => {
			const clientCartData = await localStorage.getItem("codeburger:cartInfo")

			if (clientCartData) {
				setCartProducts(JSON.parse(clientCartData))
			}
		}
		loadUserData()
	}, [])

	return (
		<CardContext.Provider value={{ putProductInCart, cartProduts }}>
			{children}
		</CardContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CardContext)

	if (!context) {
		throw new Error("useCart must be used with UserContext")
	}
	return context
}


CartProvider.propTypes = {
	children: PropTypes.node
}
