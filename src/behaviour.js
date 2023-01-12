import { useState } from 'react';

export const behaviour = (setBurger, setPoop, setHealth, setMood) => {
  //feeds floyd one burger
  const feedBurger = () => {
    setBurger(burger + 1);
    setPoop(poop + 1);
    setHealth(health + 5);
    setMood(mood + 5);
  };

  //floyd sleeps and restores 10 health
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
  };

  //cleans poop
  const clearPoop = () => {
    setPoop(0);
  };
}