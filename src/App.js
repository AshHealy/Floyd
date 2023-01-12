import React from 'react';
import Floyd from './floyd';
import food from './images/feed.png';
import jobby from './images/poop.png';

const App = () => {
  return (
    <div className='GameContainer'>
      <Floyd />
      <button onClick={() => Floyd.feedBurger()}>
        <img src={food} alt='feed floyd' />
      </button>
      <button onClick={() => Floyd.clearPoop()}>
        <img src={jobby} alt='clean up poop' />
      </button>
      <button onClick={() => Floyd.putToSleep()}>
        Sleep
      </button>
      <button onClick={() => Floyd.play()}>
        Play
      </button>
      <button onClick={() => Floyd.earnDuckBills(10)}>
        Earn DuckBills
      </button>
      <button onClick={() => Floyd.spendDuckBills(10)}>
        Spend DuckBills
      </button>
      <button onClick={() => Floyd.killFloyd(10)}>
        Kill Button
      </button>
    </div>
  );
};

export default App;

     
