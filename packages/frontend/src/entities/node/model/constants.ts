import type { NodeComponentsConfig } from './types';
import * as NodeComponents from '../ui/nodes';

export const nodeComponentsConfig: NodeComponentsConfig = {
  and: NodeComponents.AndNode,
  or: NodeComponents.OrNode,
  not: NodeComponents.NotNode,
  nor: NodeComponents.NorNode,
  nand: NodeComponents.NandNode,
  xor: NodeComponents.XorNode,
  xnor: NodeComponents.XnorNode,
  led: NodeComponents.LedNode,
  const_one: NodeComponents.ConstOneNode,
  const_zero: NodeComponents.ConstZeroNode,
  toggle_switch: NodeComponents.ToggleSwitchNode,
};
