import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p className='flex items-center justify-center text-3xl'>Logicraft</p>
  </StrictMode>,
);
