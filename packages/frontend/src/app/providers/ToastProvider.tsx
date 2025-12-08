import { Toaster } from 'sonner';
export const ToastProvider = () => (
  <Toaster
    position='top-center'
    theme='light'
    duration={5000}
    closeButton
  />
);
