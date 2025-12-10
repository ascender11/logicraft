import type { ComponentProps } from 'react';

import { cn } from '../lib';

export const Input = ({ className, ref, ...props }: ComponentProps<'input'>) => (
  <input
    type='text'
    className={cn(
      `m-0 h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900
      placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none
      not-first:focus:border-transparent disabled:cursor-not-allowed disabled:bg-gray-100
      disabled:text-gray-400`,
      className,
    )}
    ref={ref}
    {...props}
  />
);
