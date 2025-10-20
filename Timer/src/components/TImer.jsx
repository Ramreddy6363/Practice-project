import { useState, useRef,useEffect } from 'react';
import Play from './Play';
import Reset from './reset';
import TimerDIsp from './TimerDIsp';

const TImer = () => {
  const [time, setTime] = useState(() =>{
    return Number(localStorage.getItem('time' )|| 0)
  });

  useEffect(() => {
    
  
    return () => {
      localStorage.setItem('time',time)
    }
  }, [time])
  
  const [isRunning, setRunning] = useState(false);
  const timeRef = useRef(null);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    } else {
      timeRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    setRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timeRef.current);
    setTime(0);
    setRunning(false);
    timeRef.current = null;
    localStorage.removeItem('time')
  };
  return (
    <div>
      <TimerDIsp time={time} />
      <div className="flex items-center justify-center">
        <Play toggleTimer={toggleTimer} isRunning={isRunning} />
        <Reset resetTimer={resetTimer} />
      </div>
    </div>
  );
};

export default TImer;
