import { useState } from 'react';

import { BlockItem } from './BlockItem';

import type { BlockGroup as BlockGroupProps } from '@/shared/config';
import { cn } from '@/shared/lib';

export const BlockGroup = ({ title, items }: BlockGroupProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='overflow-hidden'>
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        aria-expanded={isOpen}
        className='flex w-full items-center justify-between px-3 py-2 transition-colors
          hover:bg-gray-100'>
        <span className='text-sm font-medium text-gray-800'>{title}</span>
        <span
          className={cn(
            'transform text-gray-800 transition-transform duration-300',
            isOpen && 'rotate-90',
          )}>
          ▸
        </span>
      </button>

      <div
        className={cn(
          'grid grid-cols-2 gap-2 overflow-hidden py-2 transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 p-0 opacity-0',
        )}>
        {items.map((item) => (
          <BlockItem
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
