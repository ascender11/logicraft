import type { ComponentProps } from 'react';

import { cn } from '../lib';

export const Button = ({ className, ref, children, ...props }: ComponentProps<'button'>) => (
  <button
    type='button'
    ref={ref}
    className={cn(
      'h-12 w-full rounded-xl bg-blue-600 text-base font-semibold text-white',
      'hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-60',
      className,
    )}
    {...props}>
    {children}
  </button>
);
