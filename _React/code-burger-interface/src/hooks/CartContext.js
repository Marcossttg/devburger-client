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

	//add, remov, deletando produtos do carrinho com button ( + - )

	const deleteProducts = async productId => {
		const newCart = cartProducts.filter(product => product.id !== productId)

		setCartProducts(newCart)
		await localStorage.setItem("codeburger:cartInfo", JSON.stringify(newCart))
	}

	const increaseProducts = async productId => {
		const newCart = cartProducts.map(product => {
			return product.id === productId ? { ...product, quantity: product.quantity + 1 }
				: product
		})
		setCartProducts(newCart)
		//gravando no local storage
		await localStorage.setItem("codeburger:cartInfo", JSON.stringify(newCart))
	}

	const decreaseProducts = async productId => {
		const cartIndex = cartProducts.findIndex(pd => pd.id === productId)
		if (cartProducts[cartIndex].quantity > 1) {
			const newCart = cartProducts.map(product => {
				return product.id === productId ? { ...product, quantity: product.quantity - 1 }
					: product
			})
			setCartProducts(newCart)

			await localStorage.setItem("codeburger:cartInfo", JSON.stringify(newCart))
		} else {
			deleteProducts(productId)
		}
	}
	/* xxx */

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
		<CardContext.Provider value={{ putProductInCart, cartProducts, increaseProducts, decreaseProducts }}>
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
