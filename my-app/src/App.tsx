import React from 'react';
import './styles/styles.scss';
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
