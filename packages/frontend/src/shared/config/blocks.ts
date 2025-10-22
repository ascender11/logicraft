export interface Block {
  title: string;
  icon: string;
  isTall: boolean;
}

export interface BlockGroup {
  title: string;
  items: Block[];
}

export const blocks: BlockGroup[] = [
  {
    title: 'Input Controls',
    items: [
      { title: 'Toggle switch', icon: '/icons/toggle.png', isTall: false },
      { title: 'High constant', icon: '/icons/high.png', isTall: false },
      { title: 'Low constant', icon: '/icons/low.png', isTall: false },
    ],
  },
  {
    title: 'Output Controls',
    items: [{ title: 'LED', icon: '/icons/led.png', isTall: true }],
  },
  {
    title: 'Logic Gates',
    items: [
      { title: 'Buffer', icon: '/icons/buffer.png', isTall: false },
      { title: 'NOT', icon: '/icons/not.png', isTall: false },
      { title: 'AND', icon: '/icons/and.png', isTall: false },
      { title: 'OR', icon: '/icons/or.png', isTall: false },
      { title: 'XOR', icon: '/icons/xor.png', isTall: false },
      { title: 'NAND', icon: '/icons/nand.png', isTall: false },
      { title: 'NOR', icon: '/icons/nor.png', isTall: false },
      { title: 'XNOR', icon: '/icons/xnor.png', isTall: false },
    ],
  },
];
