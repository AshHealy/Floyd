//This is how chatGPT suggests implementing currency

import { useState } from 'react';

const CurrencySystem = () => {
  const [currency, setCurrency] = useState(0);

  const earnDuckBills = (amount) => {
    setCurrency(currency + amount);
  }

  const spendDuckBills = (amount) => {
    setCurrency(currency - amount);
  }

  return (
    <div>
      <h1>Currency: {currency}</h1>
      {/* other components and elements go here */}
    </div>
  );
}

export default CurrencySystem;
