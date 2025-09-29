//Greeting.jsx
import React from 'react';

const Greeting = () => {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div>
      <h2>Hello, John!</h2>
      <p>Welcome to our website. Today is {formattedDate}.</p>
    </div>
  );
};

export default Greeting;
