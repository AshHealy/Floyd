import React, { useState, useEffect } from 'react';

const Floyd = () => {
  const [poop, setPoop] = useState(0);
  const [burger, setBurger] = useState(0);
  const [health, setHealth] = useState(100);
  const [mood, setMood] = useState(100);
  const [sleep, setSleep] = useState(false);
  const [play, setPlay] = useState(false);
  const [dead, setDead] = useState(false);

  // function to clean up the poop
  const cleanPoop = () => {
    setPoop(0);
    setMood(100);
  };

  // function to feed Floyd a burger
  const feedBurger = () => {
    setBurger(burger + 1);
    setMood(mood + 30);
    setHealth(health + 30);
  };

  // function to put Floyd to sleep
  const putToSleep = () => {
    setSleep(true);
    setMood(mood + 30);
    setHealth(health + 30);
  };

  // function to let Floyd play
  const letPlay = () => {
    setPlay(true);
    setMood(mood + 30);
    setHealth(health + 30);
  };

  // effect to check if Floyd's mood and health are 0
  useEffect(() => {
    if (mood <= 0 || health <= 0) {
      setDead(true);
    }
  }, [mood, health, dead]);

  return (
    <>
      {!dead && (
        <>
          <h1>Floyd</h1>
          <h2>Poop: {poop}</h2>
          <h2>Burgers Eaten: {burger}</h2>
          <h2>Health: {health}</h2>
          <h2>Mood: {mood}</h2>
          <h2>Sleeping: {sleep ? 'Yes' : 'No'}</h2>
          <h2>Playing: {play ? 'Yes' : 'No'}</h2>
          <button onClick={cleanPoop}>Clean Poop</button>
          <button onClick={feedBurger}>Feed Burger</button>
          <button onClick={putToSleep}>Put to Sleep</button>
          <button onClick={letPlay}>Let Play</button>
        </>
      )}
      {dead && <h1>Floyd is Dead :(</h1>}
    </>
  );
};

export default Floyd;