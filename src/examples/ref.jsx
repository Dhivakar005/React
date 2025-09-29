import React, { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <input ref={inputRef} placeholder="Focus Input" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default Ref;
