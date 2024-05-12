import React, { useState } from 'react';
import './Button.css'; // Import your CSS file

function EvaluatedButton() {
  const [evaluated, setEvaluated] = useState(true); // State to track if button is evaluated or not

  const handleClick = () => {
    setEvaluated(!evaluated); // Toggle the evaluated state
  };

  return (
    <button
      className={`evaluated-button ${evaluated ? 'evaluated' : 'not-evaluated'}`}
      onClick={handleClick}
    >
      {evaluated ? 'Evaluated' : 'Not Evaluated'}
      <span className={evaluated ? 'tick-mark' : 'cross-mark'}>
        {evaluated ? '✓' : '❌'}
      </span>
    </button>
  );
}

export default EvaluatedButton;
