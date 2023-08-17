
import React, { useState } from 'react';
import './App.css';
import UserDetail from './components/UserDetail';
import UserList from './components/UserList.';

function App() {

  const [activeUserId, setActiveUserId] = useState(null);

  return (
    <div className="App">
      <h3>Active user ID: {activeUserId}</h3>
      <div>
        <UserList setActiveUserId={setActiveUserId}/>
      </div>
      {
        activeUserId && (<div><UserDetail userId={activeUserId}/></div>)
      }
    </div>
  );
}

export default App;
