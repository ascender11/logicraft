import type { SidebarIconProps } from '../../model/types';

export const AndIcon = ({ width = 140, height = 60 }: SidebarIconProps) => {
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
        cy={15}
        r={9}
      />
      <line
        x1={20}
        y1={15}
        x2={35}
        y2={15}
      />
      <circle
        cx={10}
        cy={45}
        r={9}
      />
      <line
        x1={20}
        y1={45}
        x2={35}
        y2={45}
      />

      {/* Body */}
      <path d='M75 1C91.0163 1 104 13.9837 104 30C104 46.0163 91.0163 59 75 59H36V1H75Z' />

      {/* Output */}
      <line
        x1={105}
        y1={30}
        x2={120}
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
