import { Position } from '@xyflow/react';

import type { NodeComponentProps } from '../../model/types';
import { BaseLogicNode } from '../BaseLogicNode';

export const NotNode = ({ selected }: NodeComponentProps) => {
  return (
    <BaseLogicNode
      selected={selected}
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: 'in',
          style: { top: 30, left: 10 },
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
        {/* Input line */}
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

        {/* Output line */}
        <line
          x1={115}
          y1={30}
          x2={125}
          y2={30}
        />
      </svg>
    </BaseLogicNode>
  );
};
