
import React, { useState } from 'react';
// import Floyd from './floyd';

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
      <button onClick={() => earnDuckBills(10)}>Earn DuckBills</button>
      <button onClick={() => spendDuckBills(5)}>Spend DuckBills</button>
    </div>
  );
};