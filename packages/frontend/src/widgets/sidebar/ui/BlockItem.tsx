import type { Block as BlockItemProps } from '@/shared/config';

export const BlockItem = ({ title, icon, isTall }: BlockItemProps) => {
  return (
    <div
      className='flex cursor-pointer flex-col items-center justify-center rounded bg-gray-100 p-2
        hover:bg-gray-200'>
      <img
        className={`mb-1 block max-w-16 ${isTall ? 'max-h-[56px]' : 'max-h-[32px]'}`}
        src={icon}
        alt={title}
      />
      <span className='text-center text-xs'>{title}</span>
    </div>
  );
};
