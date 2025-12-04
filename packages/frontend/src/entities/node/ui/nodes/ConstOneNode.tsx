import { Position } from '@xyflow/react';

import type { NodeComponentProps } from '../../model/types';
import { BaseLogicNode } from '../BaseLogicNode';

export const ConstOneNode = ({ selected }: NodeComponentProps) => {
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
        <path
          d='M35.6552 15.9091V45H28.6381V22.4716H28.4677L21.962 26.4489V20.3693L29.1353 15.9091H35.6552Z'
          fill='black'
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
