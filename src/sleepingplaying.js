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
      setMood(mood + 10);
      setIsPlaying(true);
    }
  };

  const stopPlaying = () => {
    setIsPlaying(false);
  };


useEffect(() => {
    if(!isSleeping && isPlaying) {
        const interval = setInterval(() => {
            setMood(mood + 10);
        }, 1000); // 1000ms = 1s
    }
    return () => clearInterval(interval);
}, [isSleeping, isPlaying, mood]);

