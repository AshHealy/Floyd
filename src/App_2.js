import React, { useState, useEffect } from 'react';
import alive from './images/floyd-alive.gif';
import dead from './images/floyd-dead.gif';
import food from './images/feed.png';
import jobby from './images/poop.png'



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
  const [imageSource, setImageSource] = useState(alive);
  const [currency, setCurrency] = useState(0);

//______________________________________________________

// checks if floyd is alive and starts a timer, timer stops when floyd dies
  useEffect(() => {
    let timer = setInterval(() => {
      if (isAlive) {
        setAge(age + 1);
        // setPoop(poop + 1);
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
//______________________________________________________
  //feeds floyd one burger
  // I should set a delay before adding poop
  const feedBurger = () => {
    setBurger(burger + 1);
    setPoop(poop + 1);
    setHealth(health + 5);
    setMood(mood + 5);
  };
//______________________________________________________
  //floyd sleeps and restores 10 health
  //need to fix so that when floyd is sleeping he can't also be playing
  const putToSleep = () => {
    setIsSleeping(true);
    setHealth(health + 10);
    if (isPlaying) {  // I added this to try and stop sleep playing
      stopPlaying();
    } else if (isSleeping) {
      wakeUp();
    } else {
      play();
    }
  };
//wakes floyd up
  const wakeUp = () => {
    setIsSleeping(false);
    // setHealth(health - 10);
  };


  const play = () => {
    setIsPlaying(true);
    setMood(mood + 10);
    if (isSleeping) {   // I added this to try and stop sleep playing
      wakeUp() ;
    } else if (isPlaying) {
      stopPlaying() ;
    } else {
      play();
    }
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    // setMood(mood - 10);
  };
//______________________________________________________
//cleans poop
  const clearPoop = () => {
    setPoop(0);
  };
//______________________________________________________  
//Debugging tool for killing floyd
  const killFloyd = () => {
    setIsAlive(false);
    setImageSource(dead);
  };
//______________________________________________________
//Adds and subtracts from duckbills
  const earnDuckBills = (amount) => {
    setCurrency(currency + amount);
  }

  const spendDuckBills = (amount) => {
    setCurrency(currency - amount);
  }
//______________________________________________________

//this renders everything in the browser
//think it's here that I'm having issues with rendering floyd image?
 

  return (

    <div className='GameContainer'>
     
      <h2>
        Age: {age} | 
        Health: {health} | 
        Mood: {mood} | 
        <img src={jobby} alt="borgor"/> {poop} | 
        <img src={food} alt="borgor" /> {burger} 
      </h2>
      <img src={imageSource} alt="Floyd" />
      {isAlive ? (
        <div className="ButtonContainer">
            <button className="feed-burger" onClick={feedBurger}>Feed Burger</button>
          {isSleeping ? (
            <button className="wake-up" onClick={wakeUp}>Wake Up</button>
          ) : (
            <button className="sleep" onClick={putToSleep}>Go To Sleep</button>
          )}
          {isPlaying ? (
            <button className="stop-playing" onClick={stopPlaying}>Stop Playing</button>
          ) : (
            <button className="play" onClick={play}>Play</button>
          )}
          <button className="clear-poop" onClick={clearPoop}>Clear Poop</button>

          <div className='WalletContainer'>
          <h2>Duck Bills</h2>
          <p>You have {currency} Duck Bills.</p>
          <button className='earn' onClick={() => earnDuckBills(10)}> + </button>
          <button className='spend' onClick={() => spendDuckBills(10)}> - </button>
          </div>
          
        </div>
      ) : (
        <h2>Floyd is dead...</h2>
        
      )}
      <div className='devTools'>
      <button className="kill-floyd" onClick={killFloyd}>Do Not Press</button>
      <button className="restart" onClick={() => window.location.reload()}>Restart!</button>
      </div>
    </div>


  );
};


export default Floyd;