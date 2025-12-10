import type { HandleProps } from '@xyflow/react';
import type { ReactNode, CSSProperties } from 'react';

import { cn } from '@/shared/lib';

import { SingleConnectionHandle } from './SingleConnectionHandle';

export interface HandleConfig extends Omit<HandleProps, 'style'> {
  style?: CSSProperties;
}

export interface BaseLogicNodeProps {
  selected?: boolean;
  children: ReactNode;
  handles: HandleConfig[];
}

export const BaseLogicNode = ({ selected, children, handles }: BaseLogicNodeProps) => {
  return (
    <>
      <div className={cn(selected && 'node-selected')}>{children}</div>
      {handles.map((handle) => (
        <SingleConnectionHandle
          key={handle.id || `${handle.position}-${handle.type}`}
          {...handle}
          style={{
            width: 20,
            height: 20,
            border: '2px solid black',
            borderRadius: '50%',
            backgroundColor: 'white',
            ...handle.style,
          }}
        />
      ))}
    </>
  );
};
