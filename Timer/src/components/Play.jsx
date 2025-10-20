import { useEffect, useRef } from 'react';

const play = ({ toggleTimer, isRunning }) => {
  const startButton = useRef(null); 
  
  useEffect(() => {
    if (startButton.current) {
      startButton.current.focus();
    }
  },[]);

  return (
    <div>
      <button
        ref={startButton}
        onClick={toggleTimer}
        className="mt-4 bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-500"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default play;
