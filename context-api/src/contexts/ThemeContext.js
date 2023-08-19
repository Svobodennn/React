import React, { createContext } from 'react'

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {

    return <ThemeContext.Provider value="Light">
        {children}
    </ThemeContext.Provider>
}

export default ThemeContext
  