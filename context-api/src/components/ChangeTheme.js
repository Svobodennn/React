import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

function ChangeTheme() {

    const data = useContext(ThemeContext)

    return (
        <div>
            <div>Aktif Tema : {data}</div>
            <button>Change Theme</button>
        </div>
    )
}

export default ChangeTheme
