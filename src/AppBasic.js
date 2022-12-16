import React, { useState } from 'react';

const App = () => {
  const [Age, setAge] = useState(1);
  const [Health, setHealth] = useState(10);
  const [Happiness, setHappiness] = useState(10);
  const [Hunger, setHunger] = useState(10);
  const [Mood, setMood] = useState(10);
  const [Floyd, setFloyd] = useState("Floyd");
  const [Dead, setDead] = useState(false);

  const feedFloyd = () => {
    if(Hunger < 10) {
      setHunger(Hunger + 1);
    }
  };

  const playWithFloyd = () => {
    if(Happiness < 10) {
      setHappiness(Happiness + 1);
    }
  };

  const cleanFloydPoop = () => {
    if(Mood < 10) {
      setMood(Mood + 1);
    }
  };

  const letFloydSleep = () => {
    if(Health < 10) {
      setHealth(Health + 1);
    }
  };

  const incrementAge = () => {
    setAge(Age + 1);
  };

  const checkFloydStatus = () => {
    if(Age > 10 || Mood === 0 || Health === 0) {
      setDead(true);
    }
  };

  const resetFloyd = () => {
    setAge(1);
    setHealth(10);
    setHappiness(10);
    setHunger(10);
    setMood(10);
    setFloyd("Floyd");
    setDead(false);
  };

  return (
    <div className="App">
      <h1>Meet Floyd!</h1>
      <h2>Age: {Age}</h2>
      <h2>Health: {Health}</h2>
      <h2>Happiness: {Happiness}</h2>
      <h2>Hunger: {Hunger}</h2>
      <h2>Mood: {Mood}</h2>
      <button onClick={feedFloyd}>Feed Floyd</button>
      <button onClick={playWithFloyd}>Play with Floyd</button>
      <button onClick={cleanFloydPoop}>Clean Floyd's Poop</button>
      <button onClick={letFloydSleep}>Let Floyd Sleep</button>
      {Dead ? (
        <div>
          <h1>Floyd is Dead :(</h1>
          <button onClick={resetFloyd}>Reset Floyd</button>
        </div>
      ) : (
        <button onClick={incrementAge}>Increment Age</button>
      )}
    </div>
  );
};

export default App;