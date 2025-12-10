import type { SidebarIconProps } from '../../model/types';

export const NorIcon = ({ width = 140, height = 60 }: SidebarIconProps) => {
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
        x2={45}
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
        x2={45}
        y2={45}
      />

      {/* Body */}
      <path d='M36.9453 1.00684C59.8049 1.14522 74.8104 3.74173 84.9453 8.56152C95.1678 13.4231 100.503 20.5807 103.937 30.0059C100.502 39.844 95.1694 46.9951 84.9531 51.752C74.8191 56.4704 59.814 58.8658 36.9443 58.9932C45.2061 47.308 49.5 38.7084 49.5 30C49.5 21.2917 45.2069 12.6917 36.9453 1.00684Z' />

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
