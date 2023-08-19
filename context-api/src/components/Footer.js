import React, {useContext} from 'react'
import ThemeContext from '../contexts/ThemeContext'

function Footer() {
    const {theme} = useContext(ThemeContext)
  return (
    <div>
      <hr />
      Footer <br />
      Aktif Tema: {theme}
    </div>
  )
}

export default Footer
