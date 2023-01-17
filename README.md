
<div style="text-align:center;">
  <img src="/src/images/floyd.gif" alt="This is moving" />
</div>

<p align="center">
This is Floyd, as you can see he is a duck with a quirky personality. 
</p>

## To-Do List
To Do
- [ ] Implement Game Start Screen
- [ ] Add shops
- [ ] Read| database of items Floyd can buy
- [ ] Update| Save Floyd's inventory & stats



Doing
- [ ] Adjust sizes of dead and alive sprites
- [ ] Implement Floyds Room
- [ ] Render Wallet Container
- [ ] Style Wallet Container




Done
- [X] Use the useEffect hook to check if floyd is alive and starts a timer, timer stops when floyd dies
- [X] Import the Floyd component, behaviour and currencysystem from the newly created files into app.js using the import statement
- [X] Move the logic related to currency, earning and spending duckbills to currencysystem.js <!-- This good tho-->
- [X] Move the logic related to feeding and sleeping from the Floyd component to behaviour.js <!-- Why on earth did I think this would work-->
- [X] Prevent Sleep-playing <!-- kind of got this working? --> 
- [X] Style Buttons
- [X] Style Game Container
- [X] Add floyd alive and floyd dead images
- [X] Add currency system
- [X] Create new files, behaviour.js, currencysystem.js, and floyd.js in the same directory as app.js file
- [X] In floyd.js, create a new functional component Floyd that will manage state and logic related to floyd, such as age,  health, mood, and isAlive


Mvp
- [X] floyd must be able to eat and get hungry 
- [X] floyd must be able to excercise 
- [X] floyd must poop 
- [X] floyd must have a hunger level 
- [X] floyd must have a happiness level
- [X] floyd must have a health level
- [X] floyd must have a poop level
- [X] Create| a new Floyd
- [ ] Read| database of items Floyd can buy
- [ ] Update| Save Floyd's inventory & stats
- [X] Delete| (kill) Floyd


Extensions
- [ ] Floyd 1 mini-game that raises his happiness
- [X] Floyd must have at least 2 animations 
- [ ] Add Floyd egg
- [ ] Add various hats for floyd to wear
- [ ] Floyd can have a collection of 5 hats
- [ ] React Native?
- [ ] Floyd randomly leaves to go on adventures
- [ ] Floyd's Father Easter Egg
- [ ] Pink Floyd Easter Egg


## What Have I Learned So Far For Next Time

- Create the timer & Kill Buttons First
- Then Implement Behaviours
- Create a Button that starts the timer :I 
- The buttons should have been Styled Components
- Logic is chaotic and will bite you in the ass no matter what

## Notes and Questions
- Will I ever understand hooks or am I forever screwed?


## Use Later
<img src={jobby} alt="poop" /> 
<img src={food} alt="burger" />
import food from './images/feed.png';
import jobby from './images/poop.png'


| Column 1 | Column 2 | Column 3 |
| :------- | -------: | :------: |
| Value 1  | Value 2  | Value 3  |
| Value 4  | Value 5  | Value 6  |