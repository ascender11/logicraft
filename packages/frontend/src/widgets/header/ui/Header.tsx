import { cn } from '@/shared/lib';
import { Logo } from '@/shared/ui';
import { Menu } from '@/shared/ui';

export const Header = ({ className }: { className?: string }) => (
  <header
    className={cn('flex items-center justify-between bg-white px-6 py-3 shadow-md', className)}>
    <Logo />

    <Menu>
      <Menu.Trigger>
        <div
          className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full
            bg-gray-200 transition-colors hover:bg-gray-300'>
          👤
        </div>
      </Menu.Trigger>

      <Menu.Content align='end'>
        <Menu.Label>User Menu</Menu.Label>
        <Menu.Item>Edit Profile</Menu.Item>
        <Menu.Item>View Projects</Menu.Item>
        <Menu.Item>Create New Project</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Logout</Menu.Item>
      </Menu.Content>
    </Menu>
  </header>
);
