import React, {useCallback, useMemo, useState} from 'react'
import Header from './Header'
import User from './User'


function Counter() {

  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(1)

  console.log("counter component re-render")


  // const userData = useMemo(()=>{
  //   return {
  //     id: 1,
  //     name: "melih"
  //   }
  // },[])


  //useMemo'ya benzer. fonksiyonlar için useCallback kullanılır. Referans tipli veri belirten veri türlerinde kullanılır.
  //Böylelikle nerede çağırılıyorsa orası render olur
  const increment = useCallback(()=>{
    setCount((prev)=> prev+amount)
  },[amount]) //amount değişince fonksiyonu tekrar hesapla


  return (
    <div>
      <Header count={count < 5 ? count : 5} increment={increment}/>
      {/* <User data={userData}/> */}
      <hr />
      <h2>{count}</h2>
      <button onClick={increment}>Arttır</button> <br />
      Amount: {amount}
      <div>
        
        <button onClick={()=>setAmount(amount+1)}>+1</button>
        <button onClick={()=>setAmount(amount+3)}>+3</button>
        <button onClick={()=>setAmount(amount+5)}>+5</button>
      </div>
    </div>
  )
}

export default Counter
