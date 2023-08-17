import React, {useState} from 'react'

function Colors() {
    const [colors, setColors] = useState(["red","green","blue"]);

    const handleClick = () => {
        setColors([...colors,Math.random()]) {/* önceki değerleri korumak için ... şart */}
    }
  return (
    <div>
        <h2>Renkler</h2>
      {
        colors.map((color,index) => (
            <div key={index}>{color}</div>
        ))
      }

      <button onClick={handleClick}>Ekle</button>
    </div>
  )
}

export default Colors
