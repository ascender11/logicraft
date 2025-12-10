import type { SidebarIconProps } from '../../model/types';

export const ToggleSwitchIcon = ({ width = 95, height = 60 }: SidebarIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 95 60'
      fill='white'
      stroke='black'
      strokeWidth={2}
      xmlns='http://www.w3.org/2000/svg'>
      {/* Body */}
      <rect
        x={1}
        y={1}
        width={58}
        height={58}
      />
      <rect
        x={12}
        y={20}
        width={36}
        height={20}
        rx={10}
      />
      <circle
        cx={22}
        cy={30}
        r={10}
      />

      {/* Outputs */}
      <line
        x1={60}
        y1={30}
        x2={75}
        y2={30}
      />
      <circle
        cx={85}
        cy={30}
        r={9}
      />
    </svg>
  );
};
