import React, { createContext, useContext, useState, useEffect } from "react"

import PropTypes from "prop-types"

const UserContext = createContext({})

export const UserProvider = ({ children }) => {

	const [userData, setUserData] = useState({})

	const putUseData = async (userInfo) => {
		setUserData(userInfo)

		//gravando informações no local storage
		await localStorage.setItem("codeburger:userData", JSON.stringify(userInfo))
	}

	useEffect(() => {
		const loadUserData = async () => {
			const clientInfo = await localStorage.getItem("codeburger:userData")

			if (clientInfo) {
				setUserData(JSON.parse(clientInfo))
			}
		}
		loadUserData()
	}, [])

	return (
		<UserContext.Provider value={{ putUseData, userData }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => {
	const context = useContext(UserContext)

	if (!context) {
		throw new Error("useUser must be used with UserContext")
	}
	return context
}


UserProvider.propTypes = {
	children: PropTypes.node
}
