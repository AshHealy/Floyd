
import React, { useState } from 'react';


export const CurrencySystem = ({ initialCurrency }) => {
  const [currency, setCurrency] = useState(initialCurrency);

  const earnDuckBills = (amount) => {
    setCurrency(currency + amount);
  }

  const spendDuckBills = (amount) => {
    setCurrency(currency - amount);
  }

  return (
    <div className="wallet-container">
      <p>Currency: {currency} DuckBills</p>
      <div id='wallet-buttons'>
        <button className='earn' onClick={() => earnDuckBills(10)}>Earn DuckBills</button>
        <button className='spend'  onClick={() => spendDuckBills(5)}>Spend DuckBills</button>
      </div>
    </div>
  );
};