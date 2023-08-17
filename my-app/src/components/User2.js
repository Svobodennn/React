import React, {useState} from 'react'

function User2() {
    const [user, setUser] = useState({name:"Melih", surname:"Saraç" })
  return (
    <div>
      <h2>User</h2>
      {user.name} {user.surname}

      <div>
        <button onClick={()=>setUser({...user, name:"Değişti"})}>İsmi Değiştir</button> {/* user objesindeki tüm içeriği koru/yerleştir ve sadece name'i değiştir */}
        <button onClick={()=>setUser({...user, surname:"Bu da değişti"})}>Soyismi Değiştir</button> {/*aynı şekilde surname */}
      </div>
    </div>
  )
}

export default User2
