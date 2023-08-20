import React,{useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      Count: <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count+1)}>Arttır</button>
        <button onClick={() => setCount(count-1)}>Azalt</button>
      </div>
    </div>
  )
}

export default Counter
