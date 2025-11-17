import type { SidebarIconProps } from '../../model/types';

export const NandIcon = ({ width = 140, height = 60 }: SidebarIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 140 60'
      fill='white'
      stroke='black'
      strokeWidth={2}
      xmlns='http://www.w3.org/2000/svg'>
      {/* Inputs */}
      <circle
        cx={10}
        cy={14}
        r={9}
      />
      <line
        x1={20}
        y1={14}
        x2={35}
        y2={14}
      />
      <circle
        cx={10}
        cy={44}
        r={9}
      />
      <line
        x1={20}
        y1={44}
        x2={35}
        y2={44}
      />

      {/* Body */}
      <path d='M75 1C91.0163 1 104 13.9837 104 30C104 46.0163 91.0163 59 75 59H36V1H75Z' />

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
