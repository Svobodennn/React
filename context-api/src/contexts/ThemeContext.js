import React, { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext();

const defaultTheme = localStorage.getItem('theme') || "Light"


export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(defaultTheme)

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])    

    const values = {
        theme,
        setTheme
    }



    return <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>
}


//custom context
export const useTheme = () => {
    // return useContext(ThemeContext)

    const context = useContext(ThemeContext)

    if(context === undefined)
        throw new Error('useTheme must be used within a ThemeProvider') // ThemeContext dışında kullanıılırsa anlaşılması için hata mesajı oluşturduk

    return context;
}

export default ThemeContext
