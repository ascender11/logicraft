import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { cn } from '../lib';

export const MenuRoot = ({ children, ...props }: DropdownMenu.DropdownMenuProps) => (
  <DropdownMenu.Root {...props}>{children}</DropdownMenu.Root>
);

export const MenuTrigger = ({ children, ...props }: DropdownMenu.DropdownMenuTriggerProps) => (
  <DropdownMenu.Trigger
    asChild
    {...props}>
    {children}
  </DropdownMenu.Trigger>
);

export const MenuContent = ({
  children,
  className,
  align = 'start',
  ...props
}: DropdownMenu.DropdownMenuContentProps) => (
  <DropdownMenu.Portal>
    <DropdownMenu.Content
      align={align}
      sideOffset={8}
      className={cn(
        'z-50 w-56 rounded-lg border border-gray-200 bg-white p-1 shadow-lg',
        'data-[side=bottom]:animate-slide-down data-[side=top]:animate-slide-up',
        className,
      )}
      {...props}>
      {children}
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
);

export const MenuItem = ({
  children,
  className,
  onClick,
  ...props
}: DropdownMenu.DropdownMenuItemProps) => (
  <DropdownMenu.Item
    onClick={onClick}
    className={cn(
      'cursor-pointer rounded-md px-4 py-2 text-sm outline-none select-none',
      'hover:bg-gray-100 focus:bg-gray-100',
      className,
    )}
    {...props}>
    {children}
  </DropdownMenu.Item>
);
export const MenuLabel = ({
  children,
  className,
  ...props
}: DropdownMenu.DropdownMenuLabelProps) => (
  <DropdownMenu.Label
    className={cn(
      'border-b border-gray-200 px-4 py-2 text-sm font-medium text-gray-500',
      className,
    )}
    {...props}>
    {children}
  </DropdownMenu.Label>
);

export const MenuSeparator = ({ className, ...props }: DropdownMenu.DropdownMenuSeparatorProps) => (
  <DropdownMenu.Separator
    className={cn('my-1 border-t border-gray-200', className)}
    {...props}
  />
);

export const Menu = Object.assign(MenuRoot, {
  Trigger: MenuTrigger,
  Content: MenuContent,
  Item: MenuItem,
  Label: MenuLabel,
  Separator: MenuSeparator,
});
