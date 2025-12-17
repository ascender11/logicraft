import type {
  LoginRequestDto,
  LoginResponseDto,
  RegisterRequestDto,
  RegisterResponseDto,
} from 'contracts';
import {
  LoginRequestSchema,
  LoginResponseSchema,
  RegisterRequestSchema,
  RegisterResponseSchema,
} from 'contracts';

import { axiosInstance } from '@/shared/api';

import { sessionApiEndpoints } from './endpoints';

export const sessionService = {
  async register(data: RegisterRequestDto): Promise<RegisterResponseDto> {
    const parsedInput = RegisterRequestSchema.parse(data);

    const response = await axiosInstance.post(sessionApiEndpoints.register, parsedInput);

    const parsedResponse = RegisterResponseSchema.parse(response.data);

    return parsedResponse;
  },

  async login(data: LoginRequestDto): Promise<LoginResponseDto> {
    const parsedInput = LoginRequestSchema.parse(data);

    const response = await axiosInstance.post(sessionApiEndpoints.login, parsedInput);

    const parsedResponse = LoginResponseSchema.parse(response.data);

    return parsedResponse;
  },
};
