import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({})

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({})

  const putUseData = async (userInfo) => {
    setUserData(userInfo)

    // gravando informações no local storage
    await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
  }

  // deslogando usuário
  const logout = async () => {
    await localStorage.removeItem('codeburger:userData')
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburger:userData')

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }
    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUseData, userData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node,
}
