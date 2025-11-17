import type { SidebarCategory, SidebarItems } from './types';
import * as NodeIcons from '../ui/icons';

export const categories: SidebarCategory[] = [
  {
    title: 'Logic Gates',
    nodes: ['and', 'or', 'not', 'nand', 'nor', 'xor', 'xnor'],
  },
  {
    title: 'Input elements',
    nodes: ['toggle_switch', 'const_one', 'const_zero'],
  },
  {
    title: 'Output elements',
    nodes: ['led'],
  },
];

export const sidebarItems: SidebarItems = {
  and: {
    title: 'AND',
    icon: NodeIcons.AndIcon,
  },
  or: {
    title: 'OR',
    icon: NodeIcons.OrIcon,
  },
  not: {
    title: 'NOT',
    icon: NodeIcons.NotIcon,
  },
  nor: {
    title: 'NOR',
    icon: NodeIcons.NorIcon,
  },
  nand: {
    title: 'NAND',
    icon: NodeIcons.NandIcon,
  },
  xor: {
    title: 'XOR',
    icon: NodeIcons.XorIcon,
  },
  xnor: {
    title: 'XNOR',
    icon: NodeIcons.XnorIcon,
  },
  led: {
    title: 'LED',
    icon: NodeIcons.LedIcon,
    previewHeight: 50,
  },
  const_one: {
    title: 'Const 1',
    icon: NodeIcons.ConstOneIcon,
  },
  const_zero: {
    title: 'Const 0',
    icon: NodeIcons.ConstZeroIcon,
  },
  toggle_switch: {
    title: 'Toggle Switch',
    icon: NodeIcons.ToggleSwitchIcon,
  },
};
