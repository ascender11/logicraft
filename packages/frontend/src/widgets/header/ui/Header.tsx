import { useState, useRef } from 'react';

import { AvatarButton } from './AvatarButton';

import { useClickOutside } from '@/shared/hooks';
import { cn } from '@/shared/lib';
import {
  Logo,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/shared/ui';

export const Header = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  return (
    <header
      className={cn('flex items-center justify-between bg-white px-6 py-3 shadow-md', className)}>
      <Logo />

      <DropdownMenu ref={menuRef}>
        <AvatarButton onClick={() => setIsOpen((prev) => !prev)} />

        <DropdownMenuContent
          align='end'
          className={`origin-top-right transform transition-all duration-200 ease-out ${
            isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
          }`}>
          <DropdownMenuLabel>User Menu</DropdownMenuLabel>
          <DropdownMenuItem>Edit Profile</DropdownMenuItem>
          <DropdownMenuItem>View Projects</DropdownMenuItem>
          <DropdownMenuItem>Create New Project</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
