export const currencysystem = (setCurrency) => {
    // Adds and subtracts from duckbills
    const earnDuckBills = (amount) => {
      setCurrency(currency + amount);
    }
  
    const spendDuckBills = (amount) => {
      setCurrency(currency - amount);
    }
  };