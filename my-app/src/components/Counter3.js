import React, {useState, useEffect} from 'react'


function Counter2() {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(1);

    useEffect(() => {
        console.log('Bir state değişti.')
    })

    useEffect(() => {
        console.log("Component mount edildi.")
    },[]
    )

    useEffect(()=>{
        console.log("Count veya value state değişti.")
    },[count, value])

    useEffect(() => {
        console.log("Value state değişti")
    },[value])

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={() => setCount((prev) => prev + value)}>Arttır</button> {/* önceki halinin üzerine işlem yapar */}
    <hr />
    <div>
        Arttırma {value}
    </div>
    <button onClick={() => setValue(1)}>+1</button>
    <button onClick={() => setValue(3)}>+3</button>
    <button onClick={() => setValue(10)}>+10</button>
</div>
)
}

export default Counter2
