import client from '../axios/client';
import type { User } from '../types/user';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  firstName: string;
  lastName: string;
  cellphone: string;
}

export interface AuthResponse {
  token: string;
}

export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const { data } = await client.post<AuthResponse>('/api/auth/login', payload);
  return data;
};

export const register = async (payload: RegisterPayload): Promise<AuthResponse> => {
  const { data } = await client.post<AuthResponse>('/api/auth/register', payload);
  return data;
};

export const getProfile = async (): Promise<User> => {
  const { data } = await client.get<User>('/api/user/me');
  return data;
};
