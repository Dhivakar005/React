import React, { useRef } from 'react';

export default function App() {
  const inputRef = useRef();

  const Refchange = () => {
    console.log("inputRef value -----", inputRef);
    inputRef.current.style.color = "green";
  }

  return (
    <div>
      <h1 ref={inputRef}>Hello Nakama</h1>
      <button onClick={Refchange}>Change Color</button>
    </div>
  );
}
