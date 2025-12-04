import { Position } from '@xyflow/react';

import type { NodeComponentProps } from '../../model/types';
import { BaseLogicNode } from '../BaseLogicNode';

export const AndNode = ({ selected }: NodeComponentProps) => {
  return (
    <BaseLogicNode
      selected={selected}
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: 'in1',
          style: { top: 15, left: 10 },
        },
        {
          type: 'target',
          position: Position.Left,
          id: 'in2',
          style: { top: 45, left: 10 },
        },
        {
          type: 'source',
          position: Position.Right,
          id: 'out',
          style: { top: 30, right: 10 },
        },
      ]}>
      <svg
        width={140}
        height={60}
        viewBox='0 0 140 60'
        fill='white'
        stroke='black'
        strokeWidth={2}
        xmlns='http://www.w3.org/2000/svg'>
        {/* Input lines */}
        <line
          x1={20}
          y1={15}
          x2={35}
          y2={15}
        />
        <line
          x1={20}
          y1={45}
          x2={35}
          y2={45}
        />

        {/* Body */}
        <path d='M75 1C91.0163 1 104 13.9837 104 30C104 46.0163 91.0163 59 75 59H36V1H75Z' />

        {/* Output line */}
        <line
          x1={105}
          y1={30}
          x2={120}
          y2={30}
        />
      </svg>
    </BaseLogicNode>
  );
};
