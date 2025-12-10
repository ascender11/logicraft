import { Flow } from '@/features/circuit';
import { Sidebar } from '@/widgets/sidebar';

export const WorkspacePage = () => {
  return (
    <div className='flex h-full w-full'>
      <Sidebar />
      <div className='relative flex-1'>
        <Flow />
      </div>
    </div>
  );
};
