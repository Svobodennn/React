/* rfce yazarak hızlıca oluşturduk bu componenti */
import React from 'react' 

function User(props) {
  return (
    <div>
      <div>İsim: {props.name} {props.surname}</div>
      <div>Yaş: {props.age}</div>
      <div>Şehir: {props.city}</div>
    </div>
  )
}

export default User
