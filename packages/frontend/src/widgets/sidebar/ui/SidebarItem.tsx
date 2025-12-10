import { useState } from 'react';

import { cn } from '@/shared/lib';

import { sidebarItems } from '../model/constants';
import type { SidebarItemProps } from '../model/types';

export const SidebarItem = ({ type }: SidebarItemProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const { icon: Icon, title, previewHeight } = sidebarItems[type];

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('application/reactflow', type);
    e.dataTransfer.effectAllowed = 'move';
    setIsDragging(true);
  };

  const handleDragEnd = () => setIsDragging(false);

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={cn(
        'flex flex-col items-center justify-center gap-2 rounded-lg border p-2',
        'transition-all duration-200 select-none',
        isDragging
          ? 'cursor-grabbing opacity-50'
          : 'cursor-grab hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]',
      )}>
      <Icon
        width={72}
        height={previewHeight ?? 30}
      />
      <span className='text-sm'>{title}</span>
    </div>
  );
};
