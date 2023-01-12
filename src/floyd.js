import React, { useState, useEffect } from 'react';
import alive from './images/floyd-alive.gif';
import dead from './images/floyd-dead.gif';

export const Floyd = () => {
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
  }, [age, poop, health, mood, isAlive]);

  const killFloyd = () => {
    setIsAlive(false);
    setImageSource(dead);
  };

  return (
    <div className='floyd'>
      <img src={imageSource} alt='Floyd' />
      <div>Age: {age}</div>
      <div>Poop: {poop}</div>
      <div>Health: {health}</div>
      <div>Mood: {mood}</div>
      <div>Burger: {burger}</div>
      <button onClick={killFloyd}>Kill Floyd</button>
    </div>
  );
};