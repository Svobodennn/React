import React, { useContext } from 'react'
// import ThemeContext, { useTheme } from '../contexts/ThemeContext'
import { useTheme } from '../contexts/ThemeContext'

function ChangeTheme() {

    // const data = useContext(ThemeContext)
    const {theme, setTheme} = useTheme()

    return (
        <div>
            <div>Aktif Tema : {theme}</div>
            <button onClick={()=> setTheme(theme === "Dark" ? "Light":"Dark")}>Change Theme</button>
        </div>
    )
}

export default ChangeTheme
