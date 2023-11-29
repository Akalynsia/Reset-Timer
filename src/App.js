import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [sec, setSec] = useState(0);
  const timerRef = useRef(null);

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setSec((prevSec) => prevSec + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setSec(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Timer: {sec}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
