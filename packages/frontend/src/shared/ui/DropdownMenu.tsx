import { type ReactNode, forwardRef } from 'react';

import { cn } from '../lib';

interface DropdownMenuProps {
  children: ReactNode;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(({ children }, ref) => (
  <div
    ref={ref}
    className='relative inline-block'>
    {children}
  </div>
));

interface DropdownMenuContentProps {
  children: ReactNode;
  className: string;
  align?: 'start' | 'end';
}

export const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ children, className, align = 'start' }, ref) => {
    const alignment = align === 'end' ? 'right-0' : 'left-0';
    return (
      <div
        ref={ref}
        className={cn(
          `absolute mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg transition-all
          duration-200 ease-out`,
          alignment,
          className,
        )}>
        {children}
      </div>
    );
  },
);

interface DropdownMenuItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const DropdownMenuItem = ({ children, className, onClick }: DropdownMenuItemProps) => (
  <div
    onClick={onClick}
    className={cn(
      'cursor-pointer rounded-md px-4 py-2 transition-colors duration-150 hover:bg-gray-100',
      className,
    )}>
    {children}
  </div>
);

interface DropdownMenuLabelProps {
  className?: string;
  children: ReactNode;
}

export const DropdownMenuLabel = ({ children, className }: DropdownMenuLabelProps) => (
  <div
    className={cn(
      'border-b border-gray-200 px-4 py-2 text-sm font-medium text-gray-500',
      className,
    )}>
    {children}
  </div>
);

export const DropdownMenuSeparator = () => <div className='my-1 border-t border-gray-200' />;

interface DropdownMenuTriggerProps {
  children: ReactNode;
  onClick?: () => void;
}

export const DropdownMenuTrigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ children, onClick }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className='focus:outline-none'>
      {children}
    </button>
  ),
);
