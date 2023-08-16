import React from 'react';
import Header from './components/Header'; // içeri aktarılan isim büyük harfle başlamalı
import User from './components/User';
import Counter from './components/Counter';

const name = "Melih";
let surname = "Saraç";
const user = {
  // title: "Kişi",
  name: "Selami",
  surname: "Layt",
  age: 31,
  city: "Ankara"
}

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
    <hr />

    {/* <User name="Melih" surname="Saraç" age={22} city="Bursa"/>
    <br />
    <User name="Memati" surname="Ölüm" age={31} city="İstanbul"/>
    <br /> */}
    {/* <User data={user} /> */}
    <br />
    <User data={user} friends={["Ahmet","Murat","Ayşe","Fatma"]} />
    <br />

    <Counter/>
    </>
  );
}

export default App;
