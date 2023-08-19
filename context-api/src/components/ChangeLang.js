import React, { useContext } from 'react'
// import LangContext from '../contexts/LangContext'
import { useLang } from '../contexts/LangContext'

function ChangeLang() {
  const data = useLang()
  // const data = useContext(LangContext)
    return (
    <div>
      Aktif Dil: {data.lang}
      <button onClick={() => data.setLang("tr")}>TR</button>
      <button onClick={() => data.setLang("en")}>EN</button>
      <button onClick={() => data.setLang("de")}>DE</button>
    </div>
  )
}

export default ChangeLang
