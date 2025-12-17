import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import type { LoginRequestDto, LoginResponseDto } from 'contracts';
import type { UseFormReset } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { sessionActions, sessionService } from '@/entities/session';
import { userActions } from '@/entities/user';
import { routes } from '@/shared/config';
import { useAppDispatch } from '@/shared/lib';

export const useLoginUser = (reset: UseFormReset<LoginRequestDto>) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: sessionService.login,
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || 'Failed to log in. Please try again.';
      toast.error(message);
    },
    onSuccess: (data: LoginResponseDto) => {
      dispatch(sessionActions.setToken(data.access_token));
      dispatch(userActions.setUser(data.user));
      reset();
      setTimeout(() => navigate(routes.projects.base), 0);
    },
  });
};
