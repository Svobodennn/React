import React from 'react';
import Header from './components/Header'; // içeri aktarılan isim büyük harfle başlamalı

const name = "Melih";
let surname = "Saraç";

function App() {
  return (
    <> {/*bu şekilde birden fazla elemanı return edebiliriz*/}
    <Header />

     {/* className kullanılır */}
    <div className='class_adi'> 
      <p>selam</p>
    </div>

    <label htmlFor="label_adi"></label> {/* htmlFor kullanılır */}

    {name} {surname}
    </>
  );
}

export default App;
