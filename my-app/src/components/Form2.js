import React, {useState} from 'react'

function Form2() {
  
    const [form, setForm] = useState({
        name: "",
        surname: "",
        gender: "Erkek"
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        // setForm((prev)=> ({...prev, [e.target.name]: e.target.value }));
    }

    return (
        <div>
        <div>İsim</div>
        <input name='name' placeholder='İsim gir' onChange={handleChange} value={form.name} type="text" />
        <input name='surname' placeholder='Soyisim gir' onChange={handleChange} value={form.surname}  type="text" />
  
        <div>
          <select name="gender" id="gender" value={form.gender} onChange={handleChange} >
              <option value="Erkek">Erkek</option>
              <option value="Kadın">Kadın</option>
          </select>
        </div>
  
        <div>
          <h2>İsim:</h2>
          <strong>{form.name} {form.surname}</strong>
        </div>
      <div>
          <h2>Cinsiyet</h2>
          <strong>{form.gender}</strong>
      </div>
      </div>
    )
}

export default Form2
