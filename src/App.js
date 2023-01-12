import React, { useState } from 'react';
import { Floyd } from './floyd';
import { behaviour } from './behaviour';
import { currencysystem } from './currencysystem';

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
    <div>
      <Floyd
        age={age}
        setAge={setAge}
        poop={poop}
        setPoop={setPoop}
        health={health}
        setHealth={setHealth}
        mood={mood}
        setMood={setMood}
        isAlive={isAlive}
        setIsAlive={setIsAlive}
        burger={burger}
        imageSource={imageSource}
        setImageSource={setImageSource}
      />
      <button onClick={() => behaviourFunctions.feed()}>Feed</button>
      <button onClick={() => behaviourFunctions.clean()}>Clean</button>
      <button onClick={() => behaviourFunctions.play()}>Play</button>
      <button onClick={() => behaviourFunctions.sleep()}>Sleep</button>
      <button onClick={() => currencyFunctions.earn()}>Earn Currency</button>
      <button onClick={() => currencyFunctions.spend()}>Spend Currency</button>
    </div>
  );
};

export default App;