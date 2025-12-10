import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import type { ComponentProps } from 'react';
import { useState } from 'react';

import { cn } from '../lib';
import { Input } from './Input';

export const PasswordInput = ({ className, ref, ...props }: ComponentProps<'input'>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative m-0'>
      <Input
        type={showPassword ? 'text' : 'password'}
        className={cn('pr-12', className)}
        {...props}
        ref={ref}
      />
      <button
        type='button'
        className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700
          focus:outline-none'
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? 'Hide password' : 'Show password'}>
        {showPassword ? <EyeOpenIcon className='size-5' /> : <EyeClosedIcon className='size-5' />}
      </button>
    </div>
  );
};
