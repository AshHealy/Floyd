import React, { useState } from 'react';
import { Floyd } from './floyd';
import { behaviour } from './behaviour';
import { currencysystem } from './currencysystem';
import food from './images/feed.png';
import jobby from './images/poop.png'

const App = () => {
  const [age, setAge] = useState(0);
  const [poop, setPoop] = useState(0);
  const [health, setHealth] = useState(100);
  const [mood, setMood] = useState(100);
  const [isAlive, setIsAlive] = useState(true);
  const [burger, setBurger] = useState(0);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageSource, setImageSource] = useState("alive");
  const [currency, setCurrency] = useState(0);

  const behaviourFunctions = behaviour(setBurger, setPoop, setHealth, setMood);
  const currencyFunctions = currencysystem(setCurrency);

  return (
    <div className='GameContainer'>
      <Floyd
        age={age}
        poop={poop}
        health={health}
        mood={mood}
        isAlive={isAlive}
        burger={burger}
        isSleeping={isSleeping}
        isPlaying={isPlaying}
        imageSource={imageSource}
        killFloyd={behaviourFunctions.killFloyd}
        currency={currency}
      />
      <button onClick={behaviourFunctions.feedBurger}>
        <img src={food} alt='feed floyd' />
      </button>
      <button onClick={behaviourFunctions.clearPoop}>
        <img src={jobby} alt='clean up poop' />
      </button>
      <button onClick={behaviourFunctions.putToSleep}>
        Sleep
      </button>
      <button onClick={behaviourFunctions.play}>
        Play
      </button>
      <button onClick={() => currencyFunctions.earnDuckBills(10)}>
        Earn DuckBills
      </button>
      <button onClick={() => currencyFunctions.spendDuckBills(10)}>
        Spend DuckBills
      </button>
    </div>
  );
};

export default App;