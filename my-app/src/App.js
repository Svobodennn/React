import React from 'react';
import Header from './components/Header'; // içeri aktarılan isim büyük harfle başlamalı


function App() {
  return (
    //  bu şekilde birden fazla elemanı return edebiliriz
    <> 
    <Header />

     {/* className kullanılır */}
    <div className='class_adi'> 
      <p>melam</p>
    </div>

    <label htmlFor="label_adi"></label> {/* htmlFor kullanılır */}

    <p>selam</p>
    </>
  );
}

export default App;
