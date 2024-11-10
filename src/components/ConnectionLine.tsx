import React from 'react';

interface Point {
  x: number;
  y: number;
}

interface ConnectionLineProps {
  start: Point;
  end: Point;
}

export const ConnectionLine: React.FC<
  ConnectionLineProps
> = ({ start, end }) => {
  const controlPoint1 = {
    x: start.x + (end.x - start.x) / 2,
    y: start.y,
  };

  const controlPoint2 = {
    x: start.x + (end.x - start.x) / 2,
    y: end.y,
  };

  const path = `
    M ${start.x} ${start.y}
    C ${controlPoint1.x} ${controlPoint1.y},
      ${controlPoint2.x} ${controlPoint2.y},
      ${end.x} ${end.y}
  `;

  return (
    <g>
      {/* Main connection line */}
      <path
        d={path}
        fill='none'
        stroke='#0066FF4D'
        strokeWidth='8'
        className='transition-all duration-300 ease-in-out'
      />

      {/* Start dot */}
      <circle
        cx={start.x}
        cy={start.y}
        r='4'
        fill='#0066FF'
        className='transition-all duration-300 ease-in-out'
      />

      {/* End dot */}
      <circle
        cx={end.x}
        cy={end.y}
        r='4'
        fill='#0066FF'
        className='transition-all duration-300 ease-in-out'
      />
    </g>
  );
};
