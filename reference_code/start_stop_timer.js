let startButton = document.createElement("button");
startButton.innerHTML = "Start";
startButton.addEventListener("click", () => {
  if (timer === null) {
    timer = setInterval(() => {
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
  }
});

let stopButton = document.createElement("button");
stopButton.innerHTML = "Stop";
stopButton.addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
});

//idek what this is