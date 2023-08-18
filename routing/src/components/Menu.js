import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Menu() {
  const navigate = useNavigate();
  return (
    <div>
      <ul className='menu'>
        <li><Link to="/">Anasayfa</Link></li>
        <li><Link to="users">Kullanıcılar</Link></li>
        <li><Link to="contact">İletişim</Link></li>
        <li onClick={()=>navigate("contact")}>İletişim (Navigate)</li>
        <li><a href='#/' onClick={()=>navigate(-1)}>Geri</a></li>
        <li onClick={()=>navigate(-1)}>Geri</li> {/* Bir önceki sayfaya dönmeyi sağlar */}
      </ul>
    </div>
  )
}

export default Menu
