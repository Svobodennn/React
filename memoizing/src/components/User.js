import React from 'react'

function User(data) {

    console.log("user component re-render")

  return (
    <div>
        User
      <pre>
        {JSON.stringify(data)}
      </pre>
    </div>
  )
}

export default React.memo(User) // öncekiyle şimdiki halini karşılaştırır ve fark varsa render eder
