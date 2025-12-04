import { Handle, useNodeConnections } from '@xyflow/react';
import type { HandleProps } from '@xyflow/react';

export type SingleConnectionHandleProps = HandleProps;

export const SingleConnectionHandle = (props: SingleConnectionHandleProps) => {
  const connections = useNodeConnections({
    handleId: props.id ?? undefined,
    handleType: props.type,
  });

  const isConnectable =
    props.type === 'target' ? connections.length < 1 : (props.isConnectable ?? true);
  return (
    <Handle
      {...props}
      isConnectable={isConnectable}
    />
  );
};
