import React, { useState, useEffect } from 'react';


// import duck from './src/images/floyd.png';

//this sets up Floyd
const Floyd = () => {
  const [age, setAge] = useState(0);
  const [poop, setPoop] = useState(0);
  const [health, setHealth] = useState(100);
  const [mood, setMood] = useState(100);
  const [isAlive, setIsAlive] = useState(true);
  const [burger, setBurger] = useState(0);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageSource, setImageSource] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Green_tick.svg/1200px-Green_tick.svg.png');

// checks if floyd is alive and starts a timer, timer stops when floyd dies
  useEffect(() => {
    let timer = setInterval(() => {
      if (isAlive) {
        setAge(age + 1);
        setPoop(poop + 1);
        setHealth(health - 1);
        setMood(mood - 1);
        if (mood <= 0 || health <= 0 || age > 100) {
          setIsAlive(false);
          setImageSource('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Green_tick.svg/1200px-Green_tick.svg.png');
        }
      }
    }, 1000);
    return () => {
      if (isAlive) {
        clearInterval(timer);
      }
    }
  }, [age, poop, health, mood, isAlive]);

  //feeds floyd one burger
  const feedBurger = () => {
    setBurger(burger + 1);
    setPoop(poop + 1);
    setHealth(health + 5);
    setMood(mood + 5);
  };

  //floyd sleeps and restores 10 health
  //need to fix so that when floyd is sleeping he can't also be playing
  const putToSleep = () => {
    setIsSleeping(true);
    setHealth(health + 10);
  };
//wakes floyd up
  const wakeUp = () => {
    setIsSleeping(false);
    // setHealth(health - 10);
  };

  const play = () => {
    setIsPlaying(true);
    setMood(mood + 10);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    // setMood(mood - 10);
  };

//cleans poop
  const clearPoop = () => {
    setPoop(0);
  };
//Debugging tool for killing floyd
  const killFloyd = () => {
    setIsAlive(false);
    setImageSource('https://cdn-djeki.nitrocdn.com/vLUugKtJLMkeqMsJmnxZRvWarndHoWqe/assets/static/optimized/rev-8658953/wp-content/uploads/2019/04/red-x-on-network-icon.png');
  };

//this renders everything in the browser
//think it's here that I'm having issues with rendering floyd image?
  return (
    <div>
      <h1>Floyd</h1>
      <h2>
        Age: {age} | Health: {health} | Mood: {mood} | Poop: {poop} | Burger: {burger}
      </h2>
      <img src={imageSource} alt="Floyd" />
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
          <button onClick={clearPoop}>Clear Poop</button>
          <button onClick={killFloyd}>Kill Floyd</button>
        </>
      ) : (
        <h2>Floyd is dead...</h2>
      )}
    </div>
  );
};


export default Floyd;
