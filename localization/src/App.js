import './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl'
import { useState, useEffect } from 'react';

const messages = {
  'tr-TR': {
    title: "Merhaba Dünya!",
    description: "3 yeni mesajınız var."
  },
  'en-US': {
    title: "Hello World!",
    description: "You have 3 new messages."

  }
}


function App() {
  const defaultLocale = localStorage.getItem('locale') ?? navigator.language ;
  
  const [locale,setLocale] = useState(defaultLocale)

    useEffect(()=>{
      localStorage.setItem('locale', locale)
    },[locale]) // dil değiştiğinde localstorage a kaydedecek

  return (
    <div className="App">

    <IntlProvider messages={messages[locale]}>
      <p>
      <FormattedMessage id="title"/>
      <p>
        <FormattedMessage id='description'/>

      </p>
      <br /><br />
      <button onClick={() => setLocale("tr-TR")}>TR</button>
      <button onClick={() => setLocale("en-US")}>EN</button>
      </p>
    </IntlProvider>
    </div>
  );
}

export default App;
