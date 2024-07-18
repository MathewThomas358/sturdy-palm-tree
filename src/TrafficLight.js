import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState('black');
  const [index, setIndex] = useState(0);

  const colors = [
    { color: 'green', duration: 4000 },
    { color: 'yellow', duration: 1000 },
    { color: 'red', duration: 3000 },
  ];

  useEffect(() => {
    let timer;
    if (color !== 'black') {
      timer = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, colors[index].duration);
    }
    return () => clearTimeout(timer);
  }, [color, index, colors]);

  const handleClick = () => {
    if (color === 'black') {
      setColor(colors[0].color);
    } else {
      setColor('black');
    }
  };

  useEffect(() => {
    if (color !== 'black') {
      setColor(colors[index].color);
    }
  }, [index, colors, color]);

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: color,
          margin: '20px auto',
        }}
      ></div>
      <button onClick={handleClick}>On/Off</button>
    </div>
  );
};

export default TrafficLight;
