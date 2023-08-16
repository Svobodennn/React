import React from 'react';
import Header from './components/Header'; // içeri aktarılan isim büyük harfle başlamalı

const name = "Melih";
let surname = "Saraç";

const isLoggedIn = true;

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
    <br />

    {isLoggedIn ? "Hoş geldin "+name+" "+surname : <a href="">Giriş yapın.</a> } 
    {/*veya*/}
    {isLoggedIn ? <div>Hoş geldin {name} {surname}</div> : <div><a href="">Giriş Yapın.</a></div>}
    {/*veya*/}
    {isLoggedIn ? <div>Hoş geldin {name} {surname}</div> : <Header/>}
    </>
  );
}

export default App;
