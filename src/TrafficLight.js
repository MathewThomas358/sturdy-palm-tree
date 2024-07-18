import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [colorIndex, setColorIndex] = useState(-1);

  const colors = [
    { color: 'green', duration: 4000 },
    { color: 'yellow', duration: 1000 },
    { color: 'red', duration: 3000 },
  ];

  useEffect(() => {
    let timer;
    if (colorIndex >= 0) {
      timer = setTimeout(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, colors[colorIndex].duration);
    }
    return () => clearTimeout(timer);
  }, [colorIndex]);

  const handleClick = () => {
    if (colorIndex === -1) {
      setColorIndex(0);
    } else {
      setColorIndex(-1);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
      <div
          data-testid="red-light"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: colorIndex === 2 ? 'red' : '#592e2e',
            margin: '10px',
          }}
        ></div>
        <div
          data-testid="yellow-light"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: colorIndex === 1 ? 'yellow' : '#524b07',
            margin: '10px',
          }}
        ></div>
        <div
          data-testid="green-light"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: colorIndex === 0 ? 'green' : '#344f3b',
            margin: '10px',
          }}
        ></div>
        
      </div>
      <button onClick={handleClick}>Start Traffic Light</button>
    </div>
  );
};

export default TrafficLight;
