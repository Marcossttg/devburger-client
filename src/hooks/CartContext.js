import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CardContext = createContext({})

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  // criando função para adicionar item no localstorage
  const updateLocalStorage = async (products) => {
    await localStorage.setItem('devburger:cartInfo', JSON.stringify(products))
  }
  /* x */

  // adicionando produtos
  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

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
    // gravando no local storage
    await updateLocalStorage(newCartProducts)
  }

  // add, remov, deletando produtos do carrinho com button ( + - )
  const deleteProducts = async (productId) => {
    const newCart = cartProducts.filter((product) => product.id !== productId)

    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }

  const increaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async (productId) => {
    const cartIndex = cartProducts.findIndex((pd) => pd.id === productId)
    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    } else {
      deleteProducts(productId)
    }
  }
  /* xxx */

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('devburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
  }, [])

  return (
    <CardContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node,
}
