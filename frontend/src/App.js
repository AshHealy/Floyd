import React from 'react';
import Floyd from './floyd';
import { CurrencySystem } from './currencysystem';

function App() {
  return (
    <div className="App">
      <h1>Floyd</h1>
      <Floyd />
      <CurrencySystem initialCurrency={0} />
    </div>
  );
}

export default App;