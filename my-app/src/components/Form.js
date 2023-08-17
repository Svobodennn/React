import React, {useState} from 'react'

function Form() {

    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [gender,setGender] = useState("Erkek");

  return (
    <div>
      <div>İsim</div>
      <input placeholder='İsim gir' onChange={(event)=> setName(event.target.value)} value={name} type="text" />
      <input placeholder='Soyisim gir' onChange={(event)=> setSurname(event.target.value)} value={surname}  type="text" />

      <div>
        <select name="" id="" value={gender} onChange={(event)=> setGender(event.target.value)} >
            <option value="Erkek">Erkek</option>
            <option value="Kadın">Kadın</option>
        </select>
      </div>

      <div>
        <h2>İsim:</h2>
        <strong>{name} {surname}</strong>
      </div>
    <div>
        <h2>Cinsiyet</h2>
        <strong>{gender}</strong>
    </div>
    </div>
  )
}

export default Form
