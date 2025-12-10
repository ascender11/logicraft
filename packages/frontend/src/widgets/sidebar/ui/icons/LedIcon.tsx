import type { SidebarIconProps } from '../../model/types';

export const LedIcon = ({ width = 60, height = 120 }: SidebarIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 60 120'
      fill='white'
      stroke='black'
      strokeWidth={2}
      xmlns='http://www.w3.org/2000/svg'>
      {/* Input */}
      <line
        x1={30}
        y1={100}
        x2={30}
        y2={85}
      />
      <circle
        cx={30}
        cy={110}
        r={9}
      />

      {/* Body */}
      <path
        d='M13 53.501L12.6006 53.2012C5.55487 47.9086 1.00002 39.4867 1 30C1 13.9838 13.9838 1 30 1C46.0162 1.00004 59 13.9838 59 30L58.9863 30.8857C58.7126 40.0097 54.225 48.0739 47.3994 53.2012L47 53.501V67C47 76.3888 39.3888 84 30 84C20.6112 84 13 76.3888 13 67V53.501Z'
        fill='white'
      />
      <path
        d='M47 66V67C47 76.3888 39.3888 84 30 84C20.6112 84 13 76.3888 13 67V66H47Z'
        fill='black'
      />
      <path d='M20 35.2707C21.9286 40.2694 22.9948 40.9285 24.8485 35.2707C26.6792 40.2037 27.7973 40.4657 30 35.2707C31.8446 39.8629 32.9319 40.1667 35 35.2707C36.2855 40.3248 37.5016 39.4049 40 35.2707' />
      <path d='M31 84L40 35.2707' />
      <path d='M29 84L20 35.2707' />
    </svg>
  );
};
