import React, { useState, useEffect } from 'react';
import alive from './images/floyd-alive.gif';
import dead from './images/floyd-dead.gif';
import heart from './images/heartbeat.gif'



const Floyd = () => {
  const [age, setAge] = useState(0);
  const [poop, setPoop] = useState(0);
  const [health, setHealth] = useState(100);
  const  maxHealth = 100;
  const [mood, setMood] = useState(100);
  const [isAlive, setIsAlive] = useState(true);
  const [burger, setBurger] = useState(0);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageSource, setImageSource] = useState(alive);
  

  useEffect(() => {
    let timer = setInterval(() => {
      if (isAlive) {
        setAge(age + 1);
        setHealth(health - 1);
        setMood(mood - 1);
        if (mood <= 0 || health <= 0 || age > 100) {
          setIsAlive(false);
          setImageSource(dead);
        }
      }
    }, 1000);
    return () => {
      if (isAlive) {
        clearInterval(timer);
      }
    }
  }, [age, health, mood, isAlive]);


  const resetFloyd = () => {
    setAge(0);
    setPoop(0);
    setHealth(100);
    setMood(100);
    setIsAlive(true);
    setBurger(0);
    setIsSleeping(false);
    setIsPlaying(false);
    setImageSource(alive);
  };

const feedBurger = () => {
    const timeout = setTimeout(() => {
        setPoop(poop => poop + 1);
        clearTimeout(timeout);
    }, 5000);
    setBurger(burger => burger + 1);
    setHealth(health => health + 5);
    setMood(mood => mood + 5);
};


 const putToSleep = () => {
     if (!isPlaying && typeof health === 'number' && typeof isSleeping === 'boolean' ) {
         if(!isSleeping) {
           setIsSleeping(true);
           setHealth(Math.min(health + 10, maxHealth));
         }
     }
   };
 

  const wakeUp = () => {
    setIsSleeping(false);
  };

  const play = () => {
    if(!isSleeping) {
      setMood(mood + 10);
      setIsPlaying(true);
    }
  };

  const stopPlaying = () => {
    setIsPlaying(false);
  };


  const clearPoop = () => {
    setPoop(0);
  };

  const killFloyd = () => {
    setIsAlive(false);
    setImageSource(dead);
  };
return (
  <div className="GameContainer">
    <img src={imageSource} alt="floyd" />
    <h2 className='FloydStats'>
      <p>Age: {age}</p>
      <p>Poop: {poop}</p>
      <p> <img src={heart} alt="heart" />  {health}</p>
      <p>Mood: {mood}</p>
      <p>Burger: {burger}</p>
      <p>Is Sleeping: {isSleeping ? "Yes" : "No"}</p>
      <p>Is Playing: {isPlaying ? "Yes" : "No"}</p>
    </h2>
  <div className='ButtonContainer'>
    <button onClick={feedBurger} disabled={!isAlive}>Feed</button>
    <button onClick={clearPoop} disabled={!isAlive}>Clean</button>
    <button onClick={putToSleep} disabled={!isAlive} >Sleep</button>
    <button onClick={wakeUp} disabled={!isSleeping + !isAlive}>Wake Up</button>
    <button onClick={play} disabled={!isAlive} >Play</button>
    <button onClick={stopPlaying} disabled={!isPlaying + !isAlive}>Stop Playing</button>
  </div>

  <div className='DevTools'>
  <button  id='kill' onClick={killFloyd}>Kill Floyd</button>
    {!isAlive && <button id='reset' onClick={resetFloyd}>Reset</button>}
  </div>

  </div>
);
};

export default Floyd;