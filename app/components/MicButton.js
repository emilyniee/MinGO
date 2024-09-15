'use client';

import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';

const MicButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(!isPressed); // Toggle between pressed and default states
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <MicIcon
        onClick={handleClick}
        className="text-black"
        fontSize="large" 
        style={{ color: isPressed ? 'black' : 'grey', cursor: 'pointer' }} // Change color based on isPressed
      />
      {isPressed && (
        <div 
          className={`rounded-md flex items-center bg-red-100 py-0.5 px-2.5 border border-transparent text-sm text-red-800 shadow-sm mt-0.5 ${
            isPressed ? 'animate-glow' : ''}`} 
          style={{ transform: 'scale(0.75)', transformOrigin: 'center' }} >
          <div className="h-2 w-2 rounded-full bg-red-800 mr-2"></div>
          Recording
        </div>
      )}
    </div>
  );
};

export default MicButton;
