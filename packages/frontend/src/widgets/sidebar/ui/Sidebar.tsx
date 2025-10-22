import { BlockGroup } from './BlockGroup';

import { blocks } from '@/shared/config';

export const Sidebar = () => {
  return (
    <aside className='scrollbar-custom h-full w-72 overflow-y-scroll border-r border-gray-300'>
      <div className='py-2 pr-1 pl-2'>
        {blocks.map((block) => (
          <BlockGroup
            key={block.title}
            {...block}
          />
        ))}
      </div>
    </aside>
  );
};
