import type { SidebarIconProps } from '../../model/types';

export const ConstOneIcon = ({ width = 95, height = 60 }: SidebarIconProps) => {
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
      <path
        d='M35.6552 15.9091V45H28.6381V22.4716H28.4677L21.962 26.4489V20.3693L29.1353 15.9091H35.6552Z'
        fill='black'
      />

      {/* Output */}
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
