import React, {useContext} from 'react'
import { useTheme } from '../contexts/ThemeContext'
// import ThemeContext from '../contexts/ThemeContext'

function Footer() {
    const {theme} = useTheme()
  return (
    <div>
      <hr />
      Footer <br />
      Aktif Tema: {theme}
    </div>
  )
}

export default Footer
