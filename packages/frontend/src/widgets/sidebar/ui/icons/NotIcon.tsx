import type { SidebarIconProps } from '../../model/types';

export const NotIcon = ({ width = 140, height = 60 }: SidebarIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 140 60'
      fill='white'
      stroke='black'
      strokeWidth={2}
      xmlns='http://www.w3.org/2000/svg'>
      {/* Input */}
      <circle
        cx={10}
        cy={30}
        r={9}
      />
      <line
        x1={20}
        y1={30}
        x2={35}
        y2={30}
      />

      {/* Body */}
      <path d='M36 58.4834V1.5166L102.463 30L36 58.4834Z' />

      {/* Inversion bubble */}
      <circle
        cx={110}
        cy={30}
        r={4}
      />

      {/* Output */}
      <line
        x1={115}
        y1={30}
        x2={125}
        y2={30}
      />
      <circle
        cx={130}
        cy={30}
        r={9}
      />
    </svg>
  );
};
