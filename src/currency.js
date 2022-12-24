const CurrencyCounter = (() => {
    let total = 0;
  
    const addCurrency = (amount) => {
      total += amount;
    };
  
    const getTotal = () => total;
  
    const reset = () => {
      total = 0;
    };
  
    return {
      addCurrency,
      getTotal,
      reset
    }
  
  })();
  
  export default CurrencyCounter;