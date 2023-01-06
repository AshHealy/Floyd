import React, { useState, useEffect } from 'react';
import alive from './images/floyd-alive.gif';
import dead from './images/floyd-dead.gif';
import food from './images/feed.png';
import jobby from './images/poop.png'
import CurrencySystem from './currency';



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
 // fookin bills 
  let duckBills = 10;
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
      //Function to add duck bills to the character's account
      //I think the problem is amount? 
      const addDuckBills = () => {
        duckBills += 10;
      }

    //Function to subtract duck bills from the character's account
    const subtractDuckBills = (amount) => {
      duckBills -= amount;
    }

    //Function to show how much money is in the character's account
    //I should change this to an alert box maybe
    const showDuckBills = () => {
      alert(`You have ${duckBills} Duck Bills.`);
    }
//______________________________________________________

//this renders everything in the browser
//think it's here that I'm having issues with rendering floyd image?
  return (
    <div className='GameContainer'>
      <h1>Floyd</h1>
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
          <p> {showDuckBills}</p>
          <p>You have {duckBills} Duck Bills.</p>
          <button onClick={() => addDuckBills(10)}>Add 10 Duck Bills</button>
          <button onClick={() => subtractDuckBills(10)}>Subtract 10 Duck Bills</button>
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
