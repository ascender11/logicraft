import type { JSX } from 'react';

import type { NodeTypes } from '@/entities/node';

export type SidebarItemProps = {
  type: NodeTypes.NodeType;
};

export type SidebarIconProps = {
  width?: number;
  height?: number;
};

export type SidebarCategory = {
  title: string;
  nodes: NodeTypes.NodeType[];
};

export type SidebarItem = {
  title: string;
  icon: JSX.ElementType;
  previewHeight?: number;
};

export type SidebarItems = Record<NodeTypes.NodeType, SidebarItem>;
