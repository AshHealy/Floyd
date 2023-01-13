import React, { useState, useEffect } from 'react';
import alive from './images/floyd-alive.gif';
import dead from './images/floyd-dead.gif';
import food from './images/feed.png';
import jobby from './images/poop.png'

const Floyd = () => {
  const [age, setAge] = useState(0);
  const [poop, setPoop] = useState(0);
  const [health, setHealth] = useState(100);
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
    setBurger(burger + 1);
    setHealth(health + 5);
    setMood(mood + 5);
    setTimeout(() => {
      setPoop(poop + 1);
    }, 5000);
  };

  const putToSleep = () => {
    if(!isPlaying) {
      setIsSleeping(true);
      setHealth(health + 10);
    }
  };

  const wakeUp = () => {
    setIsSleeping(false);
  };

  const play = () => {
    if(!isSleeping) {
      setIsPlaying(true);
      setMood(mood + 10);
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
    <p>Age: {age}</p>
    <p>Poop: {poop}</p>
    <p>Health: {health}</p>
    <p>Mood: {mood}</p>
    <p>Burger: {burger}</p>
    <p>Is Sleeping: {isSleeping ? "Yes" : "No"}</p>
    <p>Is Playing: {isPlaying ? "Yes" : "No"}</p>
    <button onClick={feedBurger} disabled={!isAlive}>
      <img src={food} alt="feed floyd" />
    </button>
    <button onClick={clearPoop} disabled={!isAlive}>
      <img src={jobby} alt="clean up poop" />
    </button>
    <button onClick={putToSleep} disabled={!isAlive} >Sleep</button>
    <button onClick={wakeUp} disabled={!isSleeping + !isAlive}>Wake Up</button>
    <button onClick={play} disabled={!isAlive} >Play</button>
    <button onClick={stopPlaying} disabled={!isPlaying + !isAlive}>Stop Playing</button>
    <button onClick={killFloyd}>Kill Floyd</button>
    {!isAlive && <button onClick={resetFloyd}>Reset</button>}
  </div>
);
};

export default Floyd;