import { DropdownMenuTrigger } from '@/shared/ui';

export const AvatarButton = ({ onClick }: { onClick: () => void }) => (
  <DropdownMenuTrigger onClick={onClick}>
    <div
      className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-200
        transition-colors hover:bg-gray-300'>
      👤
    </div>
  </DropdownMenuTrigger>
);
