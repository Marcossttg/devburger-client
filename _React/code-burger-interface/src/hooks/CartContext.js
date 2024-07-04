import React, { createContext, useContext, useState, useEffect } from "react"

import PropTypes from "prop-types"

const CardContext = createContext({})

export const CartProvider = ({ children }) => {
	const [cartProducts, setCartProducts] = useState([])

	//adicionando produtos
	const putProductInCart = async product => {
		console.log(product)
		const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

		let newCartProducts = []
		if (cartIndex >= 0) {

			newCartProducts = cartProducts

			newCartProducts[cartIndex].quantity =
				newCartProducts[cartIndex].quantity + 1

			setCartProducts(newCartProducts)
		} else {
			product.quantity = 1
			newCartProducts = [...cartProducts, product]
			setCartProducts(newCartProducts)
		}
		//gravando no local storage
		await localStorage.setItem("codeburger:cartInfo", JSON.stringify(newCartProducts))
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
		<CardContext.Provider value={{ putProductInCart, cartProducts }}>
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
