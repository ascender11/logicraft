import { ChevronRightIcon } from '@radix-ui/react-icons';

import { Collapsible } from '@/shared/ui';

import { SidebarItem } from './SidebarItem';
import { categories } from '../model/constants';

export const Sidebar = () => (
  <aside
    id='sidebar'
    className='scrollbar-custom z-20 h-full w-72 overflow-y-scroll'>
    <div className='mb-2 py-2 pr-1 pl-2'>
      {categories.map((cat) => (
        <Collapsible
          key={cat.title}
          defaultOpen>
          <Collapsible.Trigger
            className='flex w-full items-center justify-between rounded px-2 py-1 hover:bg-gray-100
              [&[data-state=open]>svg]:rotate-90'>
            <span>{cat.title}</span>
            <ChevronRightIcon className='h-4 w-4 transition-transform duration-200' />
          </Collapsible.Trigger>

          <Collapsible.Content>
            <div className='grid grid-cols-2 gap-2 py-3'>
              {cat.nodes.map((type) => (
                <SidebarItem
                  key={type}
                  type={type}
                />
              ))}
            </div>
          </Collapsible.Content>
        </Collapsible>
      ))}
    </div>
  </aside>
);
