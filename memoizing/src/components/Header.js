import React,{memo} from 'react'

function Header({count, increment}) {
  console.log("Header component re-render")
  return (
    <div>
      <h2>Count</h2>
      <div>
        Count: {count}
      </div>
      <button onClick={increment}>Arttır</button>
    </div>
  )
}

export default memo(Header)
