import React, { useState, useEffect } from 'react';
import alive from './images/floyd-alive.gif';
import dead from './images/floyd-dead.gif';

class Floyd extends React.Component {
  state = {
    age: 0,
    poop: 0,
    health: 100,
    mood: 100,
    isAlive: true,
    burger: 0,
    isSleeping: false,
    isPlaying: false,
    imageSource: alive,
    currency: 0
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.isAlive) {
        this.setState({
          age: this.state.age + 1,
          health: this.state.health - 1,
          mood: this.state.mood - 1
        });
        if (this.state.mood <= 0 || this.state.health <= 0 || this.state.age > 100) {
          this.setState({
            isAlive: false,
            imageSource: dead
          });
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  static feedBurger() {
    this.setState({
      burger: this.state.burger + 1,
      poop: this.state.poop + 1,
      health: this.state.health + 5,
      mood: this.state.mood + 5
    });
  }

  static putToSleep() {
    this.setState({
      isSleeping: true,
      health: this.state.health + 10
    });
    if (this.state.isPlaying) {
      this.stopPlaying();
    } else if (this.state.isSleeping) {
      this.wakeUp();
    } else {
      this.play();
    }
  }

  static wakeUp() {
    this.setState({
    isSleeping: false
    });
    }
    



      render() {
        const { age, poop, health, mood, isAlive, burger, isSleeping, isPlaying, imageSource, currency } = this.state;
        return (
          <div className="FloydContainer">
            <img src={imageSource} alt="floyd" />
            <p>Age: {age}</p>
            <p>Poop: {poop}</p>
            <p>Health: {health}</p>
            <p>Mood: {mood}</p>
            <p>Burger: {burger}</p>
            <p>Is Sleeping: {isSleeping ? "Yes" : "No"}</p>
            <p>Is Playing: {isPlaying ? "Yes" : "No"}</p>
            <p>Currency: {currency} DuckBills</p>
          </div>
        );
      }
    }
    
    export default Floyd;
    
