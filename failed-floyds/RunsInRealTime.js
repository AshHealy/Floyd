import React, { useState, useEffect } from 'react';

const Floyd = () => {
  const [poop, setPoop] = useState(0);
  const [health, setHealth] = useState(100);
  const [mood, setMood] = useState(100);
  const [isAlive, setIsAlive] = useState(true);
  const [burger, setBurger] = useState(0);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setPoop(poop + 1);
      setHealth(health - 1);
      setMood(mood - 1);
      if (mood <= 0 || health <= 0) {
        setIsAlive(false);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [poop, health, mood]);

  const feedBurger = () => {
    setBurger(burger + 1);
    setPoop(poop + 1);
    setHealth(health + 5);
    setMood(mood + 5);
  };

  const putToSleep = () => {
    setIsSleeping(true);
    setHealth(health + 10);
  };

  const wakeUp = () => {
    setIsSleeping(false);
    setHealth(health - 10);
  };

  const play = () => {
    setIsPlaying(true);
    setMood(mood + 10);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    setMood(mood - 10);
  };

  return (
    <div>
      <h1>Floyd</h1>
      <h2>
        Health: {health} | Mood: {mood} | Poop: {poop} | Burger: {burger}
      </h2>
      {isAlive ? (
        <>
          <button onClick={feedBurger}>Feed Burger</button>
          {isSleeping ? (
            <button onClick={wakeUp}>Wake Up</button>
          ) : (
            <button onClick={putToSleep}>Go To Sleep</button>
          )}
          {isPlaying ? (
            <button onClick={stopPlaying}>Stop Playing</button>
          ) : (
            <button onClick={play}>Play</button>
          )}
        </>
      ) : (
        <h2>Floyd is dead...</h2>
      )}
    </div>
  );
};

export default Floyd;