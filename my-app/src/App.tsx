import React from 'react';
import './App.css';
import { mokeCards } from './mokes/moke-cards';
import Cards from './components/cards/cards';

function App({children}:any) {
  return (
    <div className="App">
      <main className='main'>
        {children}
        <Cards mokeCards={mokeCards}></Cards>
      </main>
    </div>
  );
}

export default App;
