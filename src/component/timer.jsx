import React, { useState, useEffect } from "react";

function TimerApp() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    console.log("useeffect runnibg")
    let intervalId;

    if (isRunning) {
      console.log("Timer started");
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        console.log("Timer cleaned up");
      }
    };
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Timer: {count}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default TimerApp;
