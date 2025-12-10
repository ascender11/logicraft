import { Position } from '@xyflow/react';

import type { NodeComponentProps } from '../../model/types';
import { BaseLogicNode } from '../BaseLogicNode';

export const ToggleSwitchNode = ({ data, selected }: NodeComponentProps) => {
  const knobX = data.outputValue ? 38 : 22;

  return (
    <BaseLogicNode
      selected={selected}
      handles={[
        {
          type: 'source',
          position: Position.Right,
          id: 'out',
          style: { top: 30, right: 10 },
        },
      ]}>
      <svg
        width={95}
        height={60}
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
          className='cursor-pointer'
          x={12}
          y={20}
          width={36}
          height={20}
          rx={10}
          style={{ fill: data.outputValue ? 'var(--color-node-accent)' : '#e5e7eb' }}
        />
        <circle
          className='cursor-pointer'
          cx={knobX}
          cy={30}
          r={10}
        />

        {/* Output line */}
        <line
          x1={60}
          y1={30}
          x2={75}
          y2={30}
        />
      </svg>
    </BaseLogicNode>
  );
};
